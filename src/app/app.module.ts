import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {LandingModule} from '@landing/landing.module';
import {CluckerModule} from '@clucker/clucker.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FontAwesomeModule,
      LandingModule,
      CluckerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
