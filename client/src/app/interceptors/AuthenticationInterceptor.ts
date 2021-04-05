import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token: string;
    token = localStorage.getItem('token');

    if (token) {
      request = request.clone({
        setHeaders: {
          authorization: 'Bearer ' + token,
        },
      });
    }

    return next.handle(request);
  }
}
