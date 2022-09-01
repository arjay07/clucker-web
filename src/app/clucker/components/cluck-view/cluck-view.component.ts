import {Component, Input, OnInit} from '@angular/core';
import {Cluck} from '@models/cluck';
import {User} from '@models/user';
import {UserService} from '@services/user.service';

@Component({
  selector: 'app-cluck-view',
  templateUrl: './cluck-view.component.html',
  styleUrls: ['./cluck-view.component.sass']
})
export class CluckViewComponent implements OnInit {

  @Input()
  cluck!: Cluck;

  author?: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserById(this.cluck.authorId)
      .subscribe({
        next: user => this.author = user
      });
  }

}
