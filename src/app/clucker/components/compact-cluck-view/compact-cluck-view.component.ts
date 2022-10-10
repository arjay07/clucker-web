import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cluck} from '@models/cluck';
import {User} from '@models/user';
import {UserService} from '@services/user.service';
import {CluckService} from '@clucker/services/cluck.service';

@Component({
  selector: 'app-compact-cluck-view',
  templateUrl: './compact-cluck-view.component.html',
  styleUrls: ['./compact-cluck-view.component.sass']
})
export class CompactCluckViewComponent implements OnInit {

  @Output()
  closeButtonClick = new EventEmitter();

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

  closeForm() {
    this.closeButtonClick.emit();
  }

}
