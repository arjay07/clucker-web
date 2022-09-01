import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {JwtService} from '@services/jwt.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private jwt: JwtService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.jwt.getJwtFromLocalStorage();

    if (token) {

      const authRequest = request.clone({
        headers: request.headers.set('Authorization', token)
      });

      return next.handle(authRequest);
    }

    return next.handle(request);
  }
}
