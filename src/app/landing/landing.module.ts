import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingScreenComponent } from './screens/landing-screen/landing-screen.component';
import {LandingRoutingModule} from './landing-routing.module';
import { UsernameFormComponent } from './forms/username-form/username-form.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppIconsModule} from '../app-icons.module';
import {HttpClientModule} from '@angular/common/http';
import { SignUpFormComponent } from './forms/sign-up-form/sign-up-form.component';



@NgModule({
  declarations: [
    LandingScreenComponent,
    UsernameFormComponent,
    LoginFormComponent,
    SignUpFormComponent
  ],
  exports: [
    LandingScreenComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppIconsModule
  ]
})
export class LandingModule { }
