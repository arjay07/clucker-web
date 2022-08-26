import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import {AuthToken} from '../interfaces/auth-token';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  decode(token: string): AuthToken {
    return jwtDecode<AuthToken>(token);
  }

}
