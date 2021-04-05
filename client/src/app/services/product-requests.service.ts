import { category } from './../models/category';
import { product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductRequestsService {
  constructor(private http: HttpClient) {}

  //get all catgories
  public getAllCategories(): Observable<category[]> {
    return this.http.get<category[]>('http://localhost:3001/category/');
  }

  //get all products in main page
  public getAllProducts(): Observable<product[]> {
    return this.http.get<product[]>('http://localhost:3001/product/');
  }

  //get all products of category
  public getAllCategoryProducts(categoryId): Observable<product[]> {
    return this.http.get<product[]>(
      `http://localhost:3001/category/${categoryId}`
    );
  }

  // get the number of products in login page
  public getNumberOfProducts(): Observable<number> {
    return this.http.get<number>('http://localhost:3001/product/count');
  }

  //create an order
  public addNewProduct(): Observable<product[]> {
    return this.http.post<product[]>(`http://localhost:3001/product/`, {});
  }
}
