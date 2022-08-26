import { Injectable } from '@angular/core';
import {JwtService} from './jwt.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private jwt: JwtService) { }

  login() {

  }

}
