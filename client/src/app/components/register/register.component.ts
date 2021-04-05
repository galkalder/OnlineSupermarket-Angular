import { UserLogicService } from './../../services/user-logic.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  form: FormGroup;
  constructor(
    private router: Router,
    private _formBuilder: FormBuilder,
    public UserLogicService: UserLogicService
  ) {}

  ngOnInit(): void {
    this.router.navigate(['/register']);

    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
    this.secondFormGroup = this._formBuilder.group({
      idNumber: [
        '',
        [Validators.required, Validators.maxLength(9), Validators.minLength(9)],
      ],
      password: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  registration() {
    this.UserLogicService.registration(
      this.firstFormGroup.controls.name.value,
      this.firstFormGroup.controls.lastName.value,
      this.firstFormGroup.controls.email.value,
      this.secondFormGroup.controls.idNumber.value,
      this.secondFormGroup.controls.password.value,
      this.secondFormGroup.controls.city.value
    );
  }

  public onClickGoLogin(): void {
    this.router.navigate(['/login']);
  }
}
