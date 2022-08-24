import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingModule} from './landing/landing.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./landing/landing.module').then(() => LandingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
