import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CluckFormComponent} from '@clucker/components/cluck-form/cluck-form.component';
import {PostCluck} from '@models/post-cluck';
import {Cluck} from '@models/cluck';

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
  onPostComment = new EventEmitter<PostCluck>();
  rows = 1;
  focusing = false;
  focused = false;

  constructor() { }

  ngOnInit(): void {
  }

  postComment(comment: PostCluck) {
    this.onPostComment.emit(comment);
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
