import { ProductModalComponent } from './../product-modal/product-modal.component';
import { product } from './../../models/product';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  folderUrl: string = 'assets/images/';
  @Input() product: product;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openModalProduct = () => {
    this.dialog.open(ProductModalComponent, {
      data: { product: this.product },
    });
  };
}
