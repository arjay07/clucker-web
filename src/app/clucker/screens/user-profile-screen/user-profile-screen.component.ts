import {Component, OnInit} from '@angular/core';
import {User} from '@models/user';
import {UserService} from '@services/user.service';
import {NavigationService} from '@services/navigation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DropdownItems} from '../../../types/DropdownItems';
import {AuthService} from '@services/auth.service';

@Component({
  selector: 'app-user-profile-screen',
  templateUrl: './user-profile-screen.component.html',
  styleUrls: ['./user-profile-screen.component.sass']
})
export class UserProfileScreenComponent implements OnInit {

  user?: User;
  currentUserProfile = false;
  currentPage: 'MY_CLUCKS' | 'LIKED_CLUCKS' = 'MY_CLUCKS';
  dropdownItems: DropdownItems = [];

  constructor(private userService: UserService,
              private auth: AuthService,
              private route: ActivatedRoute,
              private router: Router,
              private navigation: NavigationService) {
    this.route.params.subscribe(params => {
      if (params['username']) {
        const { username } = params;
        this.userService.getUserByUsername(username).subscribe(user => {
          this.user = user;
          this.userService.getSelf().subscribe(user => {
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
      }
    });
  }

  goBack() {
    this.navigation.back();
  }

  ngOnInit(): void {

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
