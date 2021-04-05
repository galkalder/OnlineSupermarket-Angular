import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cartProduct } from './../models/cartProduct';

@Injectable({
  providedIn: 'root',
})
export class CartRequestsService {
  constructor(private http: HttpClient) {}

  // add product to cart
  public addProductToCart(productId, amount): Observable<cartProduct[]> {
    return this.http.post<cartProduct[]>(`http://localhost:3001/cart/`, {
      productId,
      amount,
    });
  }

  // get all cart products in menu
  public getAllProductsInCart(): Observable<cartProduct[]> {
    return this.http.get<cartProduct[]>('http://localhost:3001/cart/product');
  }

  // delete product from cart
  public deleteCartProduct(cartProductId): Observable<any> {
    return this.http.delete(`http://localhost:3001/cart/${cartProductId}`);
  }

  // empty user cart
  public emptyUserCart(): Observable<any> {
    return this.http.delete('http://localhost:3001/cart/empty');
  }
}
