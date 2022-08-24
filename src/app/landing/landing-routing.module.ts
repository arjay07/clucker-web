import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UsernameFormComponent} from './forms/username-form/username-form.component';
import {LoginSignUpFormComponent} from './forms/login-form/login-sign-up-form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: UsernameFormComponent
      },
      {
        path: 'login',
        component: LoginSignUpFormComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LandingRoutingModule { }
