import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {User} from '@models/user';
import {SizeProp} from '@fortawesome/fontawesome-svg-core';
import {AuthService} from '@services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.sass']
})
export class UserAvatarComponent implements OnInit, OnChanges {

  @Input()
  mode: 'default' | 'image' = 'default';

  @Input()
  user?: User;

  @Input()
  iconSize: SizeProp = '2x';

  loading = true;

  userStyle = {};
  circleStyle = {};

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes['user'] && this.user) {
      this.loading = false;
      this.userStyle = {
        color: `hsl(${this.user.avatarHue}, 50%, 88%)`
      }
      this.circleStyle = {
        color: `hsl(${this.user.avatarHue}, 70%, 50%)`
      };
    }
  }

}
