import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CluckFormComponent} from '@clucker/components/cluck-form/cluck-form.component';
import {PostCluck} from '@models/post-cluck';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.sass']
})
export class CommentFormComponent implements OnInit {
  closing = false;

  @Input()
  show = false;

  @Output()
  showChange = new EventEmitter<boolean>();

  @Output()
  onPostComment = new EventEmitter<PostCluck>();
  rows = 1;
  showWordCount = false;
  showArrow = false;

  constructor() { }

  ngOnInit(): void {
  }

  postComment(comment: PostCluck) {
    this.onPostComment.emit(comment);
    this.closeForm();
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
    this.rows = 3;
    this.showWordCount = true;
    this.showArrow = true;
  }

  onCommentInputBlur() {
    this.rows = 1;
    this.showWordCount = false;
    this.showArrow = false;
  }
}
