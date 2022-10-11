import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment} from '@models/comment';
import {Subject} from 'rxjs';
import {CluckService} from '@clucker/services/cluck.service';
import {Cluck} from '@models/cluck';

@Component({
  selector: 'app-comment-loader',
  templateUrl: './comment-loader.component.html',
  styleUrls: ['./comment-loader.component.sass']
})
export class CommentLoaderComponent implements OnInit {

  @Input()
  cluck!: Cluck;

  targetElement: any;
  comments: Comment[] = [];

  constructor(private cluckService: CluckService) { }

  ngOnInit(): void {
    this.targetElement = document.querySelector('html');
    this.cluckService.getComments(this.cluck.id).subscribe({
      next: commentPage => {
        this.comments = commentPage.content;
      }
    });
  }

  refreshComments(event: Subject<any>) {

  }

  loadMore() {

  }

  trackByCommentId(index: number, comment: Comment) {
    return comment.id;
  }
}
