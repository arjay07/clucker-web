import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment} from '@models/comment';
import {Subject} from 'rxjs';
import {CluckService} from '@clucker/services/cluck.service';
import {Cluck} from '@models/cluck';
import {Page, PageParams} from '@models/page';

@Component({
  selector: 'app-comment-loader',
  templateUrl: './comment-loader.component.html',
  styleUrls: ['./comment-loader.component.sass']
})
export class CommentLoaderComponent implements OnInit {

  @Input()
  cluck!: Cluck;

  targetElement: any;
  page?: Page<Comment>;
  comments: Comment[] = [];
  currPage = 0;
  loading = false;

  constructor(private cluckService: CluckService) { }

  ngOnInit(): void {
    this.targetElement = document.querySelector('div#commentsView');
    this.loadComments();
  }

  refreshComments(event: Subject<any>) {
    this.loadComments({
      complete: () => {
        event.next({});
      }
    });
  }

  loadMore() {
    console.log(this.page!.last)
    if (!this.page!.last) {
      this.loading = true;
      this.currPage++;
      this.cluckService.getComments(this.cluck.id, { size: 10, page: this.currPage, sort: [ 'posted,desc' ]}).subscribe({
        next: commentsPage => {
          this.page = commentsPage;
          this.comments.push(...commentsPage.content);
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        }
      });
    }
  }

  trackByCommentId(index: number, comment: Comment) {
    return comment.id;
  }

  loadComments(options?: { success?: (response: Page<Comment>) => void, complete?: () => void}) {
    this.cluckService.getComments(this.cluck.id, { size: 10, page: 0, sort: [ 'posted,desc' ] }).subscribe({
      next: commentPage => {
        this.page = commentPage;
        this.comments = commentPage.content;
      },
      complete: () => {
        this.loading = false;
        if (options && options.complete) {
          options.complete();
        }
      }
    });
  }
}
