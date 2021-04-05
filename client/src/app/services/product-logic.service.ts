import { category } from './../models/category';
import { product } from './../models/product';
import { ProductRequestsService } from './product-requests.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductLogicService {
  countProducts: number;
  categories: category[] = [];
  activeCategoryId = 0;
  products: product[] = [];
  amountValue = 1;
  productNewName = '';
  productNewPrice = '';

  constructor(public ProductRequestsService: ProductRequestsService) {}

  //get all catgories
  getAllCategories = () => {
    let observable = this.ProductRequestsService.getAllCategories();
    observable.subscribe(
      (sucessfulServereResponseData) => {
        this.categories = sucessfulServereResponseData;
      },
      (error) => {
        alert(JSON.stringify(error));
      }
    );
  };

  //get all products in main page
  getAllProducts = () => {
    this.activeCategoryId = 0;
    let observable = this.ProductRequestsService.getAllProducts();
    observable.subscribe(
      (sucessfulServereResponseData) => {
        this.products = sucessfulServereResponseData;
      },
      (error) => {
        alert(JSON.stringify(error));
      }
    );
  };

  //get all products of category
  getAllCategoryProducts = (categoryId) => {
    this.activeCategoryId = categoryId;
    let observable = this.ProductRequestsService.getAllCategoryProducts(
      categoryId
    );
    observable.subscribe(
      (sucessfulServereResponseData) => {
        this.products = sucessfulServereResponseData;
      },
      (error) => {
        alert(JSON.stringify(error));
      }
    );
  };

  // get the number of products in login page
  getNumberOfProducts = () => {
    let Observable = this.ProductRequestsService.getNumberOfProducts();
    Observable.subscribe(
      (sucessfulServereResponseData) => {
        this.countProducts = sucessfulServereResponseData[0].countId;
      },
      (error) => {
        alert(JSON.stringify(error));
      }
    );
  };

  //add new product
  addNewProduct = () => {
    let observable = this.ProductRequestsService.addNewProduct();
    observable.subscribe(
      (sucessfulServereResponseData) => {
        this.products = sucessfulServereResponseData;
      },
      (error) => {
        alert(JSON.stringify(error));
      }
    );
  };
}
