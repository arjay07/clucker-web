import {Component, OnInit} from '@angular/core';
import {CluckFormComponent} from '@clucker/components/cluck-form/cluck-form.component';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.sass']
})
export class CommentFormComponent extends CluckFormComponent implements OnInit {
  override sendCluck(event: SubmitEvent) {

  }
}
