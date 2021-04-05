import { SuccessfulRegisterServerResponse } from './../models/SuccessfulRegisterServerResponse';
import { SuccessfulLoginServerResponse } from './../models/SuccessfulLoginServerResponse';
import { Router } from '@angular/router';
import { userLoginDetails } from './../models/userLoginDetails';
import { UserRequestsService } from './user-requests.service';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class UserLogicService {
  public userLoginDetails: userLoginDetails;
  public SuccessfulLoginServerResponse: SuccessfulLoginServerResponse = {
    userData: {},
    token: '',
  };

  constructor(
    public UserRequestsService: UserRequestsService,
    private router: Router
  ) {}

  login = (email, password) => {
    const userDetails = new userLoginDetails(email, password);
    let observable = this.UserRequestsService.login(userDetails);
    observable.subscribe(
      (SuccessfulLoginServerResponse) => {
        this.SuccessfulLoginServerResponse = SuccessfulLoginServerResponse;
        const userToken = SuccessfulLoginServerResponse.token;
        localStorage.setItem('token', userToken);
        this.router.navigate(['/home']);
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.error,
        });
      }
    );
  };

  registration = (
    name: string,
    lastName: string,
    email: string,
    idNumber: number,
    password: string,
    city: string
  ) => {
    let observable = this.UserRequestsService.registration(
      name,
      lastName,
      email,
      idNumber,
      password,
      city
    );
    observable.subscribe(
      (SuccessfulRegisterServerResponse) => {
        const userToken = SuccessfulRegisterServerResponse.token;
        localStorage.setItem('token', userToken);
        this.router.navigate(['/home']);
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.error,
        });
      }
    );
  };

  getUserDetails = () => {
    let observable = this.UserRequestsService.getUserDetails();
    observable.subscribe(
      (SuccessfulLoginServerResponse) => {
        this.SuccessfulLoginServerResponse = SuccessfulLoginServerResponse;
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.error,
        });
      }
    );
  };
}
