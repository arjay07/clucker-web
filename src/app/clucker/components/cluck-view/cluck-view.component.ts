import {Component, Input, OnInit} from '@angular/core';
import {Cluck} from '@models/cluck';
import {User} from '@models/user';
import {UserService} from '@services/user.service';
import {CluckService} from '@clucker/services/cluck.service';

@Component({
  selector: 'app-cluck-view',
  templateUrl: './cluck-view.component.html',
  styleUrls: ['./cluck-view.component.sass']
})
export class CluckViewComponent implements OnInit {

  @Input()
  cluck!: Cluck;

  author?: User;

  constructor(private userService: UserService, private cluckService: CluckService) { }

  ngOnInit(): void {
    this.userService.getUserById(this.cluck.authorId)
      .subscribe({
        next: user => this.author = user
      });
  }

  addEgg() {
    this.cluckService.addEggToCluck(this.cluck.id).subscribe({
      next: cluck => this.cluck = cluck
    });
  }

  removeEgg() {
    this.cluckService.removeEggFromCluck(this.cluck.id).subscribe({
      next: cluck => this.cluck = cluck
    });
  }

}
