import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  Subject,
  tap,
} from 'rxjs';
import { AbstractErrorHandler } from 'src/app/core/abstract-class/abstract-error-handler';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService extends AbstractErrorHandler {
  /**
   * property msg to display dialog box in views
   */
  public msg$ = new Subject<string | null>();
  /**
   * property collection
   */
  private collection$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>(
    []
  );
  /**
   * property to get url api from environment or environment.prod
   */
  private urlApi = environment.urlApi;
  /**
   *
   * @param http inject HttpClient to to calls api
   */
  constructor(private http: HttpClient) {
    super();
    this.refreshCollection();
  }

  /**
   * @funtion
   * refresh collection
   */
  public refreshCollection(): void {
    this.http
      .get<Order[]>(`${this.urlApi}/orders`)
      .pipe(
        map((tab) => {
          return tab.map((obj) => new Order(obj));
        }),
        catchError(this.handleError)
      )
      .subscribe((data) => {
        this.collection$.next(data);
      });
  }

  /**
   * @funtion
   * get collection
   */
  public get collection(): BehaviorSubject<Order[]> {
    this.refreshCollection();
    return this.collection$;
  }

  /**
   * @funtion
   * change state item
   */
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = new Order(item);
    obj.state = state;
    return this.update(obj);
  }

  /**
   * @funtion
   * update item in collection
   */
  public update(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item).pipe(
      tap((data) => {
        // if data ok
        this.refreshCollection();
        this.msg$.next(
          `La commande pour le client ${item.client} a bien été modifié`
        );
        setTimeout(() => {
          this.msg$.next(null);
        }, 2000);
      }),
      catchError(this.handleError)
    );
  }

  /**
   * @funtion
   * add item in collection
   */
  public add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}/orders`, item).pipe(
      tap((data) => {
        this.refreshCollection();
      }),
      catchError(this.handleError)
    );
  }

  /**
   * @funtion
   * delete item in collection
   */
  public delete(id: number): Observable<Order> {
    return this.http.delete<Order>(`${this.urlApi}/orders/${id}`).pipe(
      tap(() => {
        this.refreshCollection();
      }),
      catchError(this.handleError)
    );
  }

  /**
   * @funtion
   * get item by id
   */
  public getItemById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}/orders/${id}`).pipe(
      tap((data) => {}),
      catchError(this.handleError)
    );
  }
}
