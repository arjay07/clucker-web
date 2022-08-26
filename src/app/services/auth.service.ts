import { Injectable } from '@angular/core';
import {JwtService} from './jwt.service';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {User} from '../models/user';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private jwt: JwtService) { }

  login(credentials: {username: string, password: string}, callbacks?: { success: () => void, fail: () => void}) {
    const { api } = environment;
    this.http.post(`${api}/login`, credentials, {
      responseType: 'text',
      observe: 'response'
    }).subscribe({
      next: res => {
        const jwtHeader = res.headers.get('Authorization');
        localStorage.setItem('jwt', jwtHeader ? jwtHeader : '');
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        const jwtToken = localStorage.getItem('jwt');

        if (jwtToken) {
          if (callbacks) {
            if (callbacks.success) {
              callbacks.success();
            }
          }
        } else {
          if (callbacks) {
            if (callbacks.fail) {
              callbacks.fail();
            }
          }
        }
      }
    });
  }

}
