import { UserLogicService } from './../../services/user-logic.service';
import { CartLogicService } from './../../services/cart-logic.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('cartOpen', [
      state('open', style({ marginLeft: '0' })),
      state('close', style({ marginLeft: '-23%' })),
      transition('* => *', animate(250)),
    ]),
  ],
})
export class MainComponent implements OnInit {
  constructor(
    private router: Router,
    public CartLogicService: CartLogicService,
    public UserLogicService: UserLogicService
  ) {}

  ngOnInit(): void {
    this.router.navigate(['/home']);
    if (
      this.UserLogicService.SuccessfulLoginServerResponse == undefined ||
      this.UserLogicService.SuccessfulLoginServerResponse.userData.userType ==
        undefined
    ) {
      this.UserLogicService.getUserDetails();
    }
  }
}
