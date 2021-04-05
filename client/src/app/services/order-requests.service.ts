import { orderDetails } from './../models/orderDetails';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderRequestsService {
  constructor(private http: HttpClient) {}

  //create an order
  public createOrder(
    city,
    street,
    shippingDate,
    creditCard
  ): Observable<orderDetails[]> {
    return this.http.post<orderDetails[]>(`http://localhost:3001/order/`, {
      city,
      street,
      shippingDate,
      creditCard,
    });
  }

  // get the number of orders in login page
  public getNumberOfOrders(): Observable<number> {
    return this.http.get<number>('http://localhost:3001/order/count');
  }

  //cheack if there is more than three orders per day
  public getFullOrderDay(): Observable<any> {
    return this.http.get<any>('http://localhost:3001/order/');
  }
}
