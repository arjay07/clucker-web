import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {PostCluck} from '@models/post-cluck';

@Component({
  selector: 'app-cluck-form',
  templateUrl: './cluck-form.component.html',
  styleUrls: ['./cluck-form.component.sass']
})
export class CluckFormComponent implements OnInit {

  closing = false;

  @Input()
  show = false;

  @Output()
  showChange = new EventEmitter<boolean>();

  @Output()
  onPostCluck = new EventEmitter<PostCluck>();

  constructor() { }

  ngOnInit(): void {
  }

  postCluck(cluck: PostCluck) {
    this.onPostCluck.emit(cluck);
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



}
