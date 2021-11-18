import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  /**
   * property collection
   */
  private collection$!: Observable<Client[]>;
  /**
   * property to get url api from environment or environment.prod
   */
  private urlApi = environment.urlApi;
  /**
   *
   * @param http inject HttpClient to to calls api
   */
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}/clients`);
  }

  /**
   * @funtion
   * get collection
   */
  public get collection(): Observable<Client[]> {
    return this.collection$;
  }

  /**
   * @funtion
   * set collection
   */
  public set collection(col: Observable<Client[]>) {
    this.collection$ = col;
  }

  /**
   * @funtion
   * change state item
   */
  public changeState(item: Client, state: StateClient): Observable<Client> {
    const obj = new Client(item);
    obj.state = state;
    return this.update(obj);
  }

  /**
   * @funtion
   * update item in collection
   */
  public update(item: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}/clients/${item.id}`, item);
  }

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
