import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingScreenComponent} from './landing/screens/landing-screen/landing-screen.component';
import {UsernameFormComponent} from './landing/forms/username-form/username-form.component';
import {MainComponent} from './clucker/main/main.component';
import {SignUpFormComponent} from './landing/forms/sign-up-form/sign-up-form.component';
import {LoginFormComponent} from './landing/forms/login-form/login-form.component';
import {MyFeedScreenComponent} from './clucker/screens/my-feed-screen/my-feed-screen.component';
import {NotFoundComponent} from './clucker/screens/not-found/not-found.component';
import {LoginComponent} from './clucker/screens/login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {AlreadyLoggedInGuard} from './guards/already-logged-in.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [ AuthGuard ],
    children: [
      {
        path: '',
        component: MyFeedScreenComponent
      }
    ]
  },
  {
    path: 'login',
    canActivate: [ AlreadyLoggedInGuard ],
    component: LoginComponent
  },
  {
    path: 'get-started',
    canActivate: [ AlreadyLoggedInGuard ],
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
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
