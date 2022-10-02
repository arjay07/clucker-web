import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {CluckerRoutingModule} from './clucker-routing.module';
import { MyFeedScreenComponent } from './screens/my-feed-screen/my-feed-screen.component';
import { DiscoverScreenComponent } from './screens/discover-screen/discover-screen.component';
import { NotificationsScreenComponent } from './screens/notifications-screen/notifications-screen.component';
import { SearchScreenComponent } from './screens/search-screen/search-screen.component';
import { LoginComponent } from './screens/login/login.component';
import { NotFoundComponent } from './screens/not-found/not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppIconsModule} from '../app-icons.module';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import {NavBarComponent} from '@clucker/components/nav-bar/nav-bar.component';
import {NavBarItemComponent} from '@clucker/components/nav-bar-item/nav-bar-item.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { CluckViewComponent } from './components/cluck-view/cluck-view.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { AbbreviateCountPipe } from './pipes/abbreviate-count.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { CluckFormComponent } from './components/cluck-form/cluck-form.component';
import { CluckLoaderComponent } from './components/cluck-loader/cluck-loader.component';
import {NgxPullToRefreshModule} from 'ngx-pull-to-refresh';
import { UserProfileScreenComponent } from './screens/user-profile-screen/user-profile-screen.component';


@NgModule({
  declarations: [
    MainComponent,
    MyFeedScreenComponent,
    DiscoverScreenComponent,
    NotificationsScreenComponent,
    SearchScreenComponent,
    LoginComponent,
    NotFoundComponent,
    LogoutButtonComponent,
    NavBarComponent,
    NavBarItemComponent,
    TitleBarComponent,
    CluckViewComponent,
    UserAvatarComponent,
    AbbreviateCountPipe,
    TimeAgoPipe,
    CluckFormComponent,
    CluckLoaderComponent,
    UserProfileScreenComponent
  ],
    imports: [
        CommonModule,
        CluckerRoutingModule,
        ReactiveFormsModule,
        AppIconsModule,
        FormsModule,
        NgxPullToRefreshModule
    ]
})
export class CluckerModule { }
