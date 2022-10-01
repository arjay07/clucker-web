import {Component, OnInit} from '@angular/core';
import {User} from '@models/user';
import {UserService} from '@services/user.service';
import {NavigationService} from '@services/navigation.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-profile-screen',
  templateUrl: './user-profile-screen.component.html',
  styleUrls: ['./user-profile-screen.component.sass']
})
export class UserProfileScreenComponent implements OnInit {

  user?: User;
  currentUserProfile = false;
  currentPage: 'MY_CLUCKS' | 'LIKED_CLUCKS' = 'MY_CLUCKS';

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private navigation: NavigationService) {
    this.route.params.subscribe(params => {
      if (params['username']) {
        const { username } = params;
        this.userService.getUserByUsername(username).subscribe(user => {
          this.user = user;
          this.userService.getSelf().subscribe(user => {
            if (this.user) {
              this.currentUserProfile = this.user.id === user.id;
            }
          });
        });
      }
    });
  }

  goBack() {
    this.navigation.back();
  }

  ngOnInit(): void {
  }

}
