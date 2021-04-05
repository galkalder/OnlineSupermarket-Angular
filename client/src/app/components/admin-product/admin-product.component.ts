import { AdminEditModalComponent } from './../admin-edit-modal/admin-edit-modal.component';
import { product } from './../../models/product';
import { UserLogicService } from './../../services/user-logic.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css'],
})
export class AdminProductComponent implements OnInit {
  folderUrl: string = 'assets/images/';
  @Input() product: product;
  constructor(
    public UserLogicService: UserLogicService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openEditModalProduct = () => {
    this.dialog.open(AdminEditModalComponent, {
      data: { product: this.product },
    });
  };
}
