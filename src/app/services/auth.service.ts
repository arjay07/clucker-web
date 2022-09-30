import { Injectable } from '@angular/core';
import {JwtService} from './jwt.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '@env';
import {User} from '@models/user';
import {Observable, of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = environment.api;
  private tokenKey = environment.tokenKey;
  private currentAuthedUser?: User;
  private currentUserSubject = new Subject<User>();

  constructor(private http: HttpClient, private jwt: JwtService) { }

  get currentUser(): Observable<User> {
    if (this.currentAuthedUser) {
      return of(this.currentAuthedUser)
    } else {
      this.http.get<User>(`${this.api}/users/self`).subscribe({
        next: next => {
          this.currentAuthedUser = next;
          this.currentUserSubject.next(this.currentAuthedUser);
        }
      });
      return this.currentUserSubject.asObservable();
    }
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
