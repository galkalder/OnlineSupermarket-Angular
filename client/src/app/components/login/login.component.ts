import { OrderLogicService } from './../../services/order-logic.service';
import { ProductLogicService } from './../../services/product-logic.service';
import { UserLogicService } from './../../services/user-logic.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private router: Router,
    public UserLogicService: UserLogicService,
    public ProductLogicService: ProductLogicService,
    public OrderLogicService: OrderLogicService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });

    this.ProductLogicService.getNumberOfProducts();
    this.OrderLogicService.getNumberOfOrders();
  }

  public onClickGoRegister(): void {
    this.router.navigate(['/register']);
  }

  login() {
    this.UserLogicService.login(
      this.form.controls.email.value,
      this.form.controls.password.value
    );
  }
}
