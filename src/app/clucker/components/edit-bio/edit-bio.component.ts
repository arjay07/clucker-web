import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {User} from '@models/user';
import {Subscription} from 'rxjs';
import {UserService} from '@services/user.service';

@Component({
  selector: 'app-edit-bio',
  templateUrl: './edit-bio.component.html',
  styleUrls: ['./edit-bio.component.sass']
})
export class EditBioComponent implements OnInit, OnDestroy {

  editing = false;
  saving = false;

  @Input()
  user?: User;

  oldBio = '';

  userProfileSubscription?: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    if (this.user) {
      this.oldBio = this.user.bio;
    }
  }

  saveBio() {
    if (this.user) {
      this.saving = true;
      const {id} = this.user;
      this.userProfileSubscription = this.userService.updateUserProfile(id, { bio: this.user.bio }).subscribe({
        next: () => {
          if (this.user) {
            this.oldBio = this.user.bio;
          }
        },
        complete: () => {
          this.saving = false;
          this.editing = false;
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.userProfileSubscription) {
      this.userProfileSubscription.unsubscribe();
    }
  }

  buttonAction() {
    if (!this.editing) {
      this.editing = true;
    } else {
      this.saveBio();
    }
  }

  textBlur() {
    if (this.user) {
      this.user.bio = this.oldBio;
    }
    this.editing = false;
  }

  mouseDown(event: MouseEvent) {
    if (this.editing)
      event.preventDefault();
  }
}



