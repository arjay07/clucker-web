import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostCluck} from '@models/post-cluck';

@Component({
  selector: 'app-cluck-text-form',
  templateUrl: './cluck-text-form.component.html',
  styleUrls: ['./cluck-text-form.component.sass']
})
export class CluckTextFormComponent implements OnInit {

  newWordKeys = [
    'Enter',
    ' ',
    '\n'
  ];

  body = '';

  @Output()
  focus = new EventEmitter<FocusEvent>();

  @Output()
  blur = new EventEmitter<FocusEvent>();

  @Input()
  postButtonText = "Cluck";

  @Input()
  textAreaPlaceholder = "What's up?"

  @Output()
  onPostCluck = new EventEmitter<PostCluck>();

  constructor() { }

  ngOnInit(): void {
  }

  sendCluck(event: SubmitEvent) {
    event.preventDefault();
    this.onPostCluck.emit({ body: this.body });
    this.body = '';
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

  sendFocusEvent(event: FocusEvent) {
    this.focus.emit(event);
  }

  sendBlurEvent(event: FocusEvent) {
    this.blur.emit(event);
  }

}
