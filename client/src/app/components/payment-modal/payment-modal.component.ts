import { ReceiptModalComponent } from './../receipt-modal/receipt-modal.component';
import { CartLogicService } from './../../services/cart-logic.service';
import { OrderLogicService } from './../../services/order-logic.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.css'],
})
export class PaymentModalComponent implements OnInit {
  form: FormGroup;
  folderUrl: string = 'assets/images/';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public OrderLogicService: OrderLogicService,
    public CartLogicService: CartLogicService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      city: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      shippingDate: new FormControl('', Validators.required),
      creditCard: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
      ]),
    });
    this.OrderLogicService.getFullOrderDay();
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0];
  }

  formatDate(input): string {
    var datePart = input.match(/\d+/g),
      year = datePart[0],
      month = datePart[1],
      day = datePart[2];

    return day + '/' + month + '/' + year;
  }

  cheackIsDateValid(date) {
    date = this.formatDate(date);
    if (this.OrderLogicService.fullOrderDay.includes(date)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'The date you chose is too busy. Please choose another',
      });
      this.form.get('shippingDate').setValue('');
      return;
    }
  }

  createOrder() {
    this.OrderLogicService.createOrder(
      this.form.controls.city.value,
      this.form.controls.street.value,
      this.form.controls.shippingDate.value,
      this.form.controls.creditCard.value.slice(
        this.form.controls.creditCard.value.length - 4
      )
    );
    this.dialog.closeAll();
    this.openModalRecipt();
    this.CartLogicService.cartProducts = [];
  }

  openModalRecipt = () => {
    this.dialog.open(ReceiptModalComponent, {
      data: { cartProducts: this.CartLogicService.cartProducts },
    });
  };
}
