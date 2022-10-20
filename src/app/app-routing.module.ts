import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingScreenComponent} from '@landing/screens/landing-screen/landing-screen.component';
import {UsernameFormComponent} from '@landing/forms/username-form/username-form.component';
import {MainComponent} from '@clucker/main/main.component';
import {SignUpFormComponent} from '@landing/forms/sign-up-form/sign-up-form.component';
import {LoginFormComponent} from '@landing/forms/login-form/login-form.component';
import {MyFeedScreenComponent} from '@clucker/screens/my-feed-screen/my-feed-screen.component';
import {NotFoundComponent} from '@clucker/screens/not-found/not-found.component';
import {LoginComponent} from '@clucker/screens/login/login.component';
import {AuthGuard} from '@guards/auth.guard';
import {AlreadyLoggedInGuard} from '@guards/already-logged-in.guard';
import {DiscoverScreenComponent} from '@clucker/screens/discover-screen/discover-screen.component';
import {NotificationsScreenComponent} from '@clucker/screens/notifications-screen/notifications-screen.component';
import {SearchScreenComponent} from '@clucker/screens/search-screen/search-screen.component';
import {UserProfileScreenComponent} from '@clucker/screens/user-profile-screen/user-profile-screen.component';
import {EditProfileComponent} from '@clucker/screens/edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [ AuthGuard ],
    children: [
      {
        path: '',
        component: MyFeedScreenComponent,
        data: {
          activeNavRoute: 'home',
          title: 'My Feed'
        }
      },
      {
        path: 'discover',
        component: DiscoverScreenComponent,
        data: {
          activeNavRoute: 'discover',
          title: 'Discover'
        }
      },
      {
        path: 'notifications',
        component: NotificationsScreenComponent,
        data: {
          activeNavRoute: 'notifications',
          title: 'Notifications'
        }
      },
      {
        path: 'search',
        component: SearchScreenComponent,
        data: {
          activeNavRoute: 'search',
          title: 'Search'
        }
      }
    ]
  },
  {
    path: 'user/:username',
    component: UserProfileScreenComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    data: {
      title: 'Edit Profile'
    },
    canActivate: [ AuthGuard ]
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
