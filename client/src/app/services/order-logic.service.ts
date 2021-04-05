import { orderDetails } from './../models/orderDetails';
import { OrderRequestsService } from './order-requests.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderLogicService {
  orderDetails: orderDetails[];
  countOrders: number;
  fullOrderDay: any = [];
  constructor(public OrderRequestsService: OrderRequestsService) {}

  //create an order
  createOrder = (city, street, shippingDate, creditCard) => {
    let Observable = this.OrderRequestsService.createOrder(
      city,
      street,
      shippingDate,
      creditCard
    );
    Observable.subscribe(
      (sucessfulServereResponseData) => {
        this.orderDetails = sucessfulServereResponseData;
      },
      (error) => {
        alert(JSON.stringify(error));
      }
    );
  };

  //get the number of orders in login page
  getNumberOfOrders = () => {
    let Observable = this.OrderRequestsService.getNumberOfOrders();
    Observable.subscribe(
      (sucessfulServereResponseData) => {
        this.countOrders = sucessfulServereResponseData[0].countId;
      },
      (error) => {
        alert(JSON.stringify(error));
      }
    );
  };

  //cheack if there is more than three orders per day
  getFullOrderDay = () => {
    let Observable = this.OrderRequestsService.getFullOrderDay();
    Observable.subscribe(
      (sucessfulServereResponseData) => {
        this.fullOrderDay = sucessfulServereResponseData;
      },
      (error) => {
        alert(JSON.stringify(error));
      }
    );
  };
}
