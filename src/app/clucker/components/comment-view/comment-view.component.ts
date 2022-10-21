import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Comment} from '@models/comment';
import {UserService} from '@services/user.service';
import {User} from '@models/user';
import {Cluck} from '@models/cluck';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.sass']
})
export class CommentViewComponent implements OnInit, OnDestroy {

  @Input()
  cluck!: Cluck;

  @Input()
  comment!: Comment;

  author?: User;

  author$?: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.author$ = this.userService.getUserById(this.comment.authorId)
      .subscribe({
        next: user => this.author = user
      });
  }

  ngOnDestroy() {
    if (this.author$) {
      this.author$.unsubscribe();
    }
  }

}
