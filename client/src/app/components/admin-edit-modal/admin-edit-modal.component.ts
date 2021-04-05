import { ProductLogicService } from './../../services/product-logic.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-edit-modal',
  templateUrl: './admin-edit-modal.component.html',
  styleUrls: ['./admin-edit-modal.component.css'],
})
export class AdminEditModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public ProductLogicService: ProductLogicService
  ) {}

  ngOnInit(): void {}

  closeModal = () => {
    this.dialog.closeAll();
  };
}
