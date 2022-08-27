import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {ActiveNavRoute} from '../types/ActiveNavRoute';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

}
