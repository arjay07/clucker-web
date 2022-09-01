import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingScreenComponent } from './screens/landing-screen/landing-screen.component';
import { UsernameFormComponent } from './forms/username-form/username-form.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppIconsModule} from '../app-icons.module';
import { SignUpFormComponent } from './forms/sign-up-form/sign-up-form.component';
import {AppRoutingModule} from '../app-routing.module';



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
    FormsModule,
    ReactiveFormsModule,
    AppIconsModule,
    AppRoutingModule
  ]
})
export class LandingModule { }
