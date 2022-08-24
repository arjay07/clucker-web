import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingScreenComponent } from './screens/landing-screen/landing-screen.component';



@NgModule({
  declarations: [
    LandingScreenComponent
  ],
  exports: [
    LandingScreenComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }
