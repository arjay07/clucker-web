import { Injectable } from '@angular/core';
import {JwtService} from './jwt.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '@env';
import {User} from '../models/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = environment.api;
  tokenKey = environment.tokenKey;

  constructor(private http: HttpClient, private jwt: JwtService) { }

  get currentUser(): Observable<User> {
    return this.http.get<User>(`${this.api}/users/self`);
  }

  get loggedIn(): boolean {
    const jwt = this.jwt.getJwtFromLocalStorage();
    return this.jwt.isValid(jwt);
  }

  login(credentials: {username: string, password: string}, callbacks?: { success: () => void, fail: (errorMessage?: string) => void}) {
    this.http.post(`${this.api}/login`, credentials, {
      responseType: 'text',
      observe: 'response'
    }).subscribe({
      next: res => {
        console.log(res);
        const jwtHeader = res.headers.get('Authorization');
        localStorage.setItem(this.tokenKey, jwtHeader ? jwtHeader : '');
      },
      error: err => {
        if (callbacks && callbacks.fail) {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 403 || err.status === 400) {
              callbacks.fail('Incorrect username or password.');
              return;
            }
          }
          callbacks.fail('Something went wrong. Please try again later.');
        }
      },
      complete: () => {
        const jwtToken = localStorage.getItem(this.tokenKey);

        if (jwtToken && callbacks && callbacks.success) {
          callbacks.success();
        }
      }
    });
  }

  logout({action}: {action: () => void}): void {
    localStorage.removeItem(this.tokenKey);
    action();
  }

}
