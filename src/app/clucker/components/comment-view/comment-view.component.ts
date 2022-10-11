import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '@models/comment';
import {UserService} from '@services/user.service';
import {User} from '@models/user';

@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.sass']
})
export class CommentViewComponent implements OnInit {

  @Input()
  comment!: Comment;

  author?: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserById(this.comment.authorId)
      .subscribe({
        next: user => this.author = user
      });
  }

}
