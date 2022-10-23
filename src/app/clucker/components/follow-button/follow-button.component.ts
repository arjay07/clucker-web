import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {User} from '@models/user';
import {UserService} from '@services/user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.sass']
})
export class FollowButtonComponent implements OnInit, OnDestroy {

  @Input()
  user!: User;

  following? = false;

  followUser$?: Subscription;
  unfollowUser$?: Subscription;

  loading = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.following = this.user.currentlyFollowingUser;
  }

  followUser() {
    this.unsubscribe();
    this.loading = true;
    this.followUser$ = this.userService.followUser(this.user.id).subscribe(() => {
      this.following = true;
      this.user.currentlyFollowingUser = true;
      this.user.followersCount++;
      this.loading = false;
    });
  }

  unfollowUser() {
    this.unsubscribe();
    this.loading = true;
    this.unfollowUser$ = this.userService.unfollowUser(this.user.id).subscribe(() => {
      this.following = false;
      this.user.currentlyFollowingUser = false;
      this.user.followersCount--;
      this.loading = false;
    });
  }

  toggleFollow() {
    this.following ? this.unfollowUser() : this.followUser();
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  unsubscribe() {
    if (this.followUser$) {
      this.followUser$.unsubscribe();
    }

    if (this.unfollowUser$) {
      this.unfollowUser$.unsubscribe();
    }
  }

}
