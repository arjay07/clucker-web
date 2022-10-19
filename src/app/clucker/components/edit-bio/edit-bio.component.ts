import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {User} from '@models/user';
import {UserService} from '@clucker/services/user.service';
import {Subscription} from 'rxjs';

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

  userProfileSubscription?: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  saveBio() {
    if (this.user) {
      this.saving = true;

      const {id} = this.user;

      this.userProfileSubscription = this.userService.updateUserProfile(id, { bio: this.user.bio }).subscribe(() => {

      });
    }
  }

  ngOnDestroy() {
    if (this.userProfileSubscription) {
      this.userProfileSubscription.unsubscribe();
    }
  }

  textBlur() {
    console.log('Blur');
  }

  buttonAction() {
    if (!this.editing) {
      this.editing = true;
    } else {
      this.saveBio();
    }
  }
}


