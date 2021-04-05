import { SuccessfulRegisterServerResponse } from './../models/SuccessfulRegisterServerResponse';
import { SuccessfulLoginServerResponse } from '../models/SuccessfulLoginServerResponse';
import { userLoginDetails } from './../models/userLoginDetails';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserRequestsService {
  constructor(private http: HttpClient) {}

  public login(
    userDetails: userLoginDetails
  ): Observable<SuccessfulLoginServerResponse> {
    return this.http.post<SuccessfulLoginServerResponse>(
      'http://localhost:3001/users/login',
      userDetails
    );
  }

  public registration(
    name: string,
    lastName: string,
    email: string,
    idNumber: number,
    password: string,
    city: string
  ): Observable<SuccessfulRegisterServerResponse> {
    return this.http.post<SuccessfulRegisterServerResponse>(
      'http://localhost:3001/users/registration',
      {
        name,
        lastName,
        email,
        idNumber,
        password,
        city,
      }
    );
  }

  public getUserDetails(): Observable<SuccessfulLoginServerResponse> {
    return this.http.get<SuccessfulLoginServerResponse>(
      'http://localhost:3001/users/'
    );
  }
}
