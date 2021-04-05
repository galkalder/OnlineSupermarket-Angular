import { UserLogicService } from './../../services/user-logic.service';
import { ProductLogicService } from './../../services/product-logic.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  counter = new Array(10);
  constructor(
    public ProductLogicService: ProductLogicService,
    public UserLogicService: UserLogicService
  ) {}

  ngOnInit(): void {
    this.ProductLogicService.getAllProducts();
  }
}
