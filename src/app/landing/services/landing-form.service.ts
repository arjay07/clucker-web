import { Injectable } from '@angular/core';
import {LoginCredentials} from '../../interfaces/login-credentials';
import {SignUpData} from '../../interfaces/sign-up-data';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {catchError, map, Observable, of, throwError} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LandingFormService {

  username = '';

  constructor(private http: HttpClient, private router: Router) { }

  checkUsernameAvailability(username: string) {
    const { api } = environment;
    return this.http.get(`${api}/users/available-usernames`, {
      params: { username },
      observe: 'response',
      responseType: 'text'
    }).pipe(
      map(res => {
        return res.ok;
      })
    ).pipe(catchError((err) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 400) {
          return of(false);
        }
      }
      return throwError(() => new Error('Something went wrong. Please make sure you\'re connected to the internet and try again.'));
    }));
  }

  checkRoute() {
    if (!this.username)
      this.routeBackToUsernameForm();
  }

  routeBackToUsernameForm() {
    this.router.navigate(['']);
  }

  submitForm(typeOfForm: 'login' | 'signup', formData: LoginCredentials | SignUpData): Observable<string | Object | null> {
    const { api } = environment;
    if (typeOfForm === 'login') {
      return this.http.post(`${api}/login`, formData, {
        observe: 'response'
      }).pipe(
        map(res => {
          if (res.ok)
            return res.headers.get('Authorization');
          return null;
        })
      );
    } else {
      const { api } = environment;
      return this.http.post<Object>(`${api}/users`, formData);
    }
  }

  loginAndRedirectToApp(username: string, password: string) {

  }

}
