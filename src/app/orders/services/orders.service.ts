import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, tap } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  /**
   * property msg to display dialog box in views
   */
  public msg$ = new Subject<string | null>();
  /**
   * property collection
   */
  private collection$!: Observable<Order[]>;
  /**
   * property to get url api from environment or environment.prod
   */
  private urlApi = environment.urlApi;
  /**
   *
   * @param http inject HttpClient to to calls api
   */
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
      tap((data) => console.log(data)),
      map((tab) => {
        return tab.map((obj) => new Order(obj));
      })
    );
  }

  /**
   * @funtion
   * get collection
   */
  public get collection(): Observable<Order[]> {
    return this.collection$;
  }

  /**
   * @funtion
   * set collection
   */
  public set collection(col: Observable<Order[]>) {
    this.collection$ = col;
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
        this.msg$.next(
          `La commande pour le client ${item.client} a bien été modifié`
        );
        setTimeout(() => {
          this.msg$.next(null);
        }, 2000);
      })
    );
  }

  /**
   * @funtion
   * add item in collection
   */
  public add(item: Order): Observable<Order> {
    return this.http
      .post<Order>(`${this.urlApi}/orders`, item)
      .pipe(tap((data) => {}));
  }

  /**
   * @funtion
   * delete item in collection
   */

  /**
   * @funtion
   * get item by id
   */
}
