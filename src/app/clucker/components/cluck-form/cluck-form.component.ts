import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {PostCluck} from '../../../models/post-cluck';

@Component({
  selector: 'app-cluck-form',
  templateUrl: './cluck-form.component.html',
  styleUrls: ['./cluck-form.component.sass']
})
export class CluckFormComponent implements OnInit {

  closing = false;
  newWordKeys = [
    'Enter',
    ' ',
    '\n'
  ];

  body = '';

  @Input()
  show = false;

  @Output()
  showChange = new EventEmitter<boolean>();

  @Output()
  onPostCluck = new EventEmitter<PostCluck>();

  constructor() { }

  ngOnInit(): void {
  }

  sendCluck(event: SubmitEvent) {
    event.preventDefault();
    this.onPostCluck.emit({ body: this.body });
  }

  closeForm() {
    this.closing = true;
    setTimeout(() => {
      this.show = false;
      this.closing = false;
      this.showChange.emit(this.show);
    }, 300);
  }

  get cluckWords() {
    const words = this.body.split(/\s/);
    return this.body ? words.length : 0;
  }

  onKeyDown(event: KeyboardEvent) {
    (event.ctrlKey || event.metaKey) && event.key === 'z' && event.preventDefault();
    this.cluckWords >= 6 && this.newWordKeys.includes(event.key) && event.preventDefault();
  }

  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const { clipboardData } = event;
    const text = clipboardData!.getData('text');
    const words = text.split(' ');
    let trimmed = '';
    for (let i = 0; i < 5; i++) {
      let word = words[i];
      trimmed += word + ' ';
    }
    this.body = trimmed.trim();
  }

}
