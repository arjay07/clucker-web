import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import {AuthToken} from '@interfaces/auth-token';
import {environment} from '@env';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  tokenKey = environment.tokenKey;

  constructor() {
  }

  decode(token: string): AuthToken {
    return jwtDecode<AuthToken>(token);
  }

  isValid(token: string | null): boolean {
    if (!token)
      return false;
    const authToken = this.decode(token);
    return !!authToken.sub;
  }

  getJwtFromLocalStorage(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

}
