import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {CluckerRoutingModule} from './clucker-routing.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    CluckerRoutingModule
  ]
})
export class CluckerModule { }
