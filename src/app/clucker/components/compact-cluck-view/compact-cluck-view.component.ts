import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Cluck} from '@models/cluck';
import {User} from '@models/user';
import {UserService} from '@services/user.service';
import {CluckService} from '@clucker/services/cluck.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-compact-cluck-view',
  templateUrl: './compact-cluck-view.component.html',
  styleUrls: ['./compact-cluck-view.component.sass']
})
export class CompactCluckViewComponent implements OnInit, OnDestroy {

  @Output()
  closeButtonClick = new EventEmitter();

  @Input()
  cluck!: Cluck;

  @Input()
  hideX = false;

  @Output()
  cluckChange = new EventEmitter<Cluck>();

  author?: User;

  userSub?: Subscription;
  addEggSub?: Subscription;
  removeEggSub?: Subscription;

  constructor(private userService: UserService, private cluckService: CluckService) { }

  ngOnInit(): void {
    this.userSub = this.userService.getUserById(this.cluck.authorId)
      .subscribe({
        next: user => this.author = user
      });
  }

  addEgg() {
    this.addEggSub = this.cluckService.addEggToCluck(this.cluck.id).subscribe(cluck => this.updateCluck(cluck));
  }

  removeEgg() {
    this.removeEggSub = this.cluckService.removeEggFromCluck(this.cluck.id).subscribe(cluck => this.updateCluck(cluck));
  }

  closeForm() {
    this.closeButtonClick.emit();
  }

  ngOnDestroy() {
    if (this.userSub)
      this.userSub.unsubscribe();

    if (this.addEggSub)
      this.addEggSub.unsubscribe();

    if (this.removeEggSub)
      this.removeEggSub.unsubscribe();
  }

  private updateCluck(cluck: Cluck) {
    this.cluck = cluck;
    this.cluckChange.emit(cluck);
  }

}
