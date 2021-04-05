import { ProductLogicService } from './../../services/product-logic.service';
import { category } from './../../models/category';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  @Input() category: category;
  constructor(public ProductLogicService: ProductLogicService) {}

  ngOnInit(): void {}
}
