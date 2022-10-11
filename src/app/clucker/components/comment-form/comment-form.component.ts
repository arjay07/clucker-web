import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CluckFormComponent} from '@clucker/components/cluck-form/cluck-form.component';
import {PostCluck} from '@models/post-cluck';
import {Cluck} from '@models/cluck';
import {PostComment} from '@models/post-comment';
import {CluckService} from '@clucker/services/cluck.service';
import {Subject} from 'rxjs';
import {Comment} from '@models/comment';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.sass']
})
export class CommentFormComponent implements OnInit {
  closing = false;

  @Input()
  cluck!: Cluck;

  @Output()
  cluckChange = new EventEmitter<Cluck>();

  @Input()
  show = false;

  @Output()
  showChange = new EventEmitter<boolean>();

  @Output()
  onPostComment = new EventEmitter<PostComment>();
  rows = 1;
  focusing = false;
  focused = false;

  addCommentEvent = new Subject<Comment>();

  constructor(private cluckService: CluckService) { }

  ngOnInit(): void {
  }

  postComment(postCluck: PostCluck) {
    const comment: PostComment = { ...postCluck };

    this.cluckService.postComment(this.cluck.id, comment).subscribe({
      next: data => {
        this.addCommentEvent.next(data);
        this.cluck.commentCount++;
        this.emitCluck(this.cluck);
      }
    });
  }

  closeForm() {
    this.closing = true;
    setTimeout(() => {
      this.show = false;
      this.closing = false;
      this.showChange.emit(this.show);
    }, 300);
  }

  onCommentInputFocus() {
    this.rows = 5;
    this.focusing = true;
    setTimeout(() => {
      this.focused = true;
    }, 300);
  }

  onCommentInputBlur() {
    this.rows = 1;
    this.focusing = false;
    this.focused = false;
  }

  emitCluck(event: Cluck) {
    this.cluckChange.emit(event);
  }
}
