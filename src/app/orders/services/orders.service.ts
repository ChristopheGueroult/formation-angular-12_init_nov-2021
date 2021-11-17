import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
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
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`);
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

  /**
   * @funtion
   * update item in collection
   */

  /**
   * @funtion
   * add item in collection
   */

  /**
   * @funtion
   * delete item in collection
   */

  /**
   * @funtion
   * get item by id
   */
}
