import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {LandingModule} from '@landing/landing.module';
import {CluckerModule} from '@clucker/clucker.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from '@models/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      FontAwesomeModule,
      LandingModule,
      CluckerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
