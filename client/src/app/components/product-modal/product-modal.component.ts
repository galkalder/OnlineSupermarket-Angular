import { CartLogicService } from './../../services/cart-logic.service';
import { ProductLogicService } from './../../services/product-logic.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css'],
})
export class ProductModalComponent implements OnInit {
  folderUrl: string = 'assets/images/';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public ProductLogicService: ProductLogicService,
    public CartLogicService: CartLogicService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  closeModal = () => {
    this.dialog.closeAll();
  };
}
