import { UserLogicService } from './../../services/user-logic.service';
import { Router } from '@angular/router';
import { CartLogicService } from './../../services/cart-logic.service';
import { ProductLogicService } from './../../services/product-logic.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  inputValue: string = '';
  constructor(
    public ProductLogicService: ProductLogicService,
    public CartLogicService: CartLogicService,
    public UserLogicService: UserLogicService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ProductLogicService.getAllCategories();
  }

  onLogoutClicked(): void {
    localStorage.clear();
    this.CartLogicService.cartProducts = [];
    this.router.navigate(['/login']);
  }
}
