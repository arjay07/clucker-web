import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-cluck-form',
  templateUrl: './cluck-form.component.html',
  styleUrls: ['./cluck-form.component.sass']
})
export class CluckFormComponent implements OnInit {

  @Input()
  show = false;

  closing = false;

  @Output()
  showChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  sendCluck(event: SubmitEvent) {
    event.preventDefault();
    console.log('Sending cluck...');
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
