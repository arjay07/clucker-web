import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingScreenComponent } from './screens/landing-screen/landing-screen.component';
import {LandingRoutingModule} from './landing-routing.module';
import { UsernameFormComponent } from './forms/username-form/username-form.component';
import { LoginSignUpFormComponent } from './forms/login-form/login-sign-up-form.component';
import {FormsModule} from '@angular/forms';
import {AppIconsModule} from '../app-icons.module';



@NgModule({
  declarations: [
    LandingScreenComponent,
    UsernameFormComponent,
    LoginSignUpFormComponent
  ],
  exports: [
    LandingScreenComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    FormsModule,
    AppIconsModule
  ]
})
export class LandingModule { }
