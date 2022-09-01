import {Component, Input, OnInit} from '@angular/core';
import {Cluck} from '../../../models/cluck';

@Component({
  selector: 'app-cluck-view',
  templateUrl: './cluck-view.component.html',
  styleUrls: ['./cluck-view.component.sass']
})
export class CluckViewComponent implements OnInit {

  @Input()
  cluck!: Cluck;

  constructor() { }

  ngOnInit(): void {
  }

}
