import { ProductLogicService } from './../../services/product-logic.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css'],
})
export class AdminMenuComponent implements OnInit {
  constructor(public ProductLogicService: ProductLogicService) {}

  ngOnInit(): void {}
}
