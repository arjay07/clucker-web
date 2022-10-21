import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Cluck} from '@models/cluck';
import {User} from '@models/user';
import {UserService} from '@services/user.service';
import {CluckService} from '@clucker/services/cluck.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-cluck-view',
  templateUrl: './cluck-view.component.html',
  styleUrls: ['./cluck-view.component.sass']
})
export class CluckViewComponent implements OnInit, OnDestroy {

  @Input()
  cluck!: Cluck;

  author?: User;

  author$?: Subscription;

  @Output()
  commentButtonActive: EventEmitter<Cluck> = new EventEmitter<Cluck>();

  constructor(private userService: UserService, private cluckService: CluckService) { }

  ngOnInit(): void {
    this.author$ = this.userService.getUserById(this.cluck.authorId)
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

  comment() {
    this.commentButtonActive.emit(this.cluck);
  }

  ngOnDestroy() {
    if (this.author$) {
      this.author$.unsubscribe();
    }
  }

}
