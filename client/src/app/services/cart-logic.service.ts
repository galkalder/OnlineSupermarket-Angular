import { cartProduct } from './../models/cartProduct';
import { CartRequestsService } from './cart-requests.service';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class CartLogicService {
  cartProducts: cartProduct[] = [];
  isCartOpen = true;
  finalCartPrice: number = 0;
  constructor(
    public CartRequestsService: CartRequestsService,
    public dialog: MatDialog
  ) {}

  // add product to cart
  addProductToCart = (productId, amountValue, price, name, image) => {
    let Observable = this.CartRequestsService.addProductToCart(
      productId,
      amountValue
    );
    Observable.subscribe(
      () => {
        const newCartProduct: cartProduct = {
          id: productId,
          amount: amountValue,
          total_price: price * amountValue,
          name: name,
          image: image,
        };
        this.cartProducts.push(newCartProduct);
        this.dialog.closeAll();
      },
      (error) => {
        alert(JSON.stringify(error));
      }
    );
  };

  // get all cart products in menu
  getAllProductsInCart = () => {
    if (this.cartProducts.length == 0) {
      let Observable = this.CartRequestsService.getAllProductsInCart();
      Observable.subscribe(
        (sucessfulServereResponseData) => {
          if (sucessfulServereResponseData.length > 0) {
            this.promptOldCartDialog(sucessfulServereResponseData);
          }
        },
        (error) => {
          alert(JSON.stringify(error));
        }
      );
    }
  };

  // delete product from cart
  deleteCartProduct = (cartProductId) => {
    let Observable = this.CartRequestsService.deleteCartProduct(cartProductId);
    Observable.subscribe(
      () => {
        this.cartProducts = this.cartProducts.filter(
          (cartProduct) => cartProduct.id != cartProductId
        );
      },
      (error) => {
        alert(JSON.stringify(error));
      }
    );
  };

  // get final cart price
  cartTotalPrice(): number {
    let cartTotalPrice = 0;
    this.cartProducts.forEach((cartProduct) => {
      cartTotalPrice = +cartTotalPrice + +cartProduct.total_price;
    });
    cartTotalPrice = +cartTotalPrice.toFixed(2);
    return cartTotalPrice;
  }

  switchCart(): void {
    this.isCartOpen = !this.isCartOpen;
  }

  // set exist user cart
  private setUserCartFromServerResponse(successfulServerRequestData) {
    this.cartProducts = successfulServerRequestData;
  }

  // empty user cart
  private emptyUserCart() {
    let Observable = this.CartRequestsService.emptyUserCart();
    Observable.subscribe(
      () => {
        this.cartProducts = [];
      },
      (error) => {
        alert(JSON.stringify(error));
      }
    );
  }

  // alert exist user cart
  private promptOldCartDialog(successfulServerRequestData) {
    Swal.fire({
      title: 'Hey, i found an old cart that belongs to you!',
      text: 'Do you want to use the old cart or open a new one?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Open new cart',
      confirmButtonText: 'Restore old cart',
    }).then((result) => {
      if (result.isConfirmed) {
        this.setUserCartFromServerResponse(successfulServerRequestData);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Your cart was restored successfuly',
          timer: 1500,
        });
      } else {
        this.emptyUserCart();
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Your cart was deleted successfuly',
          timer: 1500,
        });
      }
    });
  }
}
