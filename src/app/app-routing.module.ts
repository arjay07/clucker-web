import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingScreenComponent} from './landing/screens/landing-screen/landing-screen.component';
import {UsernameFormComponent} from './landing/forms/username-form/username-form.component';
import {MainComponent} from './clucker/main/main.component';
import {SignUpFormComponent} from './landing/forms/sign-up-form/sign-up-form.component';
import {LoginFormComponent} from './landing/forms/login-form/login-form.component';
import {MyFeedScreenComponent} from './clucker/screens/my-feed-screen/my-feed-screen.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: MyFeedScreenComponent
      }
    ]
  },
  {
    path: 'get-started',
    component: LandingScreenComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: UsernameFormComponent
      },
      {
        path: 'sign-up',
        component: SignUpFormComponent
      },
      {
        path: 'login',
        component: LoginFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
