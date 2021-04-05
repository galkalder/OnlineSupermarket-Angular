import { CartLogicService } from './../../services/cart-logic.service';
import { cartProduct } from './../../models/cartProduct';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css'],
})
export class CartProductComponent implements OnInit {
  folderUrl: string = 'assets/images/';
  @Input() cartProduct: cartProduct;

  constructor( public CartLogicService: CartLogicService) {}

  ngOnInit(): void {}
}
