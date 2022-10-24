import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '@models/user';
import {UserService} from '@services/user.service';
import {NavigationService} from '@services/navigation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DropdownItems} from '../../../types/DropdownItems';
import {AuthService} from '@services/auth.service';
import {Subscription} from 'rxjs';
import {CluckLoaderService} from '@clucker/services/cluck-loader.service';

@Component({
  selector: 'app-user-profile-screen',
  templateUrl: './user-profile-screen.component.html',
  styleUrls: ['./user-profile-screen.component.sass'],
  providers: [
    CluckLoaderService
  ]
})
export class UserProfileScreenComponent implements OnInit, OnDestroy {

  user?: User;
  currentUserProfile = false;
  currentPage: 'MY_CLUCKS' | 'LIKED_CLUCKS' = 'MY_CLUCKS';
  dropdownItems: DropdownItems = [];

  user$?: Subscription;
  self$?: Subscription;
  reset$?: Subscription;

  constructor(private userService: UserService,
              private auth: AuthService,
              private route: ActivatedRoute,
              private router: Router,
              private navigation: NavigationService) {
    this.route.params.subscribe(params => {
      if (params['username']) {
        const { username } = params;
        const userO$ = this.userService.getUserByUsername(username);
        this.user$ = userO$.subscribe(user => {
          this.user = user;
          this.self$ = this.userService.self.subscribe(user => {
            if (this.user) {
              this.currentUserProfile = this.user.id === user.id;
              if (this.currentUserProfile) {
                this.setCurrentUserMenu();
              } else {
                this.setOtherUserMenu();
              }
            }
          });
        });
        this.reset$ = this.userService.getUserByUsername(username, false).subscribe(
          user => {
            this.user = user;
          }
        );
      }
    });
  }

  goBack() {
    this.navigation.back();
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    if (this.user$) {
      this.user$.unsubscribe();
    }

    if (this.self$) {
      this.self$.unsubscribe();
    }
  }

  setCurrentUserMenu() {
    this.dropdownItems = [
      {
        label: 'Settings',
        destination: '/settings'
      },
      {
        label: 'Edit Profile',
        destination: '/edit-profile'
      },
      {
        label: 'Log Out',
        action: () => {
          this.logout();
        },
        separator: true,
        classes: 'text-red-500'
      }
    ];
  }

  setOtherUserMenu() {
    this.dropdownItems = [
      {
        label: 'Unfollow',
        action: () => this.unfollowUser()
      },
      {
        label: 'Block',
        classes: 'text-red-500'
      }
    ];
  }

  showMenu() {

  }

  logout() {
    this.auth.logout({action: () => this.router.navigate(['login']) });
  }

  unfollowUser() {
    if (this.user) {
      const { id } = this.user;

    }
  }

}
