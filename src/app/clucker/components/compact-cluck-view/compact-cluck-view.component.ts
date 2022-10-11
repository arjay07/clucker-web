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

  @Input()
  hideX = false;

  @Output()
  cluckChange = new EventEmitter<Cluck>();

  author?: User;

  constructor(private userService: UserService, private cluckService: CluckService) { }

  ngOnInit(): void {
    this.userService.getUserById(this.cluck.authorId)
      .subscribe({
        next: user => this.author = user
      });
  }

  addEgg() {
    this.cluckService.addEggToCluck(this.cluck.id).subscribe(cluck => this.updateCluck(cluck));
  }

  removeEgg() {
    this.cluckService.removeEggFromCluck(this.cluck.id).subscribe(cluck => this.updateCluck(cluck));
  }

  closeForm() {
    this.closeButtonClick.emit();
  }

  private updateCluck(cluck: Cluck) {
    this.cluck = cluck;
    this.cluckChange.emit(cluck);
  }

}
