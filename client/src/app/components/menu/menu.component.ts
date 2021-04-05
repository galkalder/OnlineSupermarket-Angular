import { PaymentModalComponent } from './../payment-modal/payment-modal.component';
import { CartLogicService } from './../../services/cart-logic.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [],
})
export class MenuComponent implements OnInit {
  showFiller = false;
  constructor(
    public CartLogicService: CartLogicService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.CartLogicService.getAllProductsInCart();
  }

  openModalProduct = () => {
    this.dialog.open(PaymentModalComponent, {
      data: { cartProducts: this.CartLogicService.cartProducts },
    });
  };
}
