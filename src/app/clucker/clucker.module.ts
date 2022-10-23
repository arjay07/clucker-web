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
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { CommentViewComponent } from './components/comment-view/comment-view.component';
import { CommentLoaderComponent } from './components/comment-loader/comment-loader.component';
import { CompactCluckViewComponent } from './components/compact-cluck-view/compact-cluck-view.component';
import { CluckTextFormComponent } from './components/cluck-text-form/cluck-text-form.component';
import { EditBioComponent } from './components/edit-bio/edit-bio.component';
import { ToggleClickDirective } from './directives/toggle-click.directive';
import { AutofocusDirective } from './directives/autofocus.directive';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { EditProfileComponent } from './screens/edit-profile/edit-profile.component';
import { ScreenBarComponent } from './components/screen-bar/screen-bar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsScreenComponent } from './screens/settings-screen/settings-screen.component';
import {CluckLoaderService} from '@clucker/services/cluck-loader.service';
import { FollowButtonComponent } from './components/follow-button/follow-button.component';


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
    UserProfileScreenComponent,
    CommentFormComponent,
    CommentViewComponent,
    CommentLoaderComponent,
    CompactCluckViewComponent,
    CluckTextFormComponent,
    EditBioComponent,
    ToggleClickDirective,
    AutofocusDirective,
    DropdownComponent,
    EditProfileComponent,
    ScreenBarComponent,
    SettingsComponent,
    SettingsScreenComponent,
    FollowButtonComponent
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
