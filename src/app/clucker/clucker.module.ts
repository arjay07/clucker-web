import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {CluckerRoutingModule} from './clucker-routing.module';
import { MyFeedScreenComponent } from './screens/my-feed-screen/my-feed-screen.component';
import { DiscoverScreenComponent } from './screens/discover-screen/discover-screen.component';
import { NotificationsScreenComponent } from './screens/notifications-screen/notifications-screen.component';
import { SearchScreenComponent } from './screens/search-screen/search-screen.component';



@NgModule({
  declarations: [
    MainComponent,
    MyFeedScreenComponent,
    DiscoverScreenComponent,
    NotificationsScreenComponent,
    SearchScreenComponent
  ],
  imports: [
    CommonModule,
    CluckerRoutingModule
  ]
})
export class CluckerModule { }
