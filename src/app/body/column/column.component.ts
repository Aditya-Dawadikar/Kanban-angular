import { Component, OnInit,Output } from '@angular/core';
import {CardComponent} from './card/card.component';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Output() task="hello duniya";

  constructor() { }

  ngOnInit(): void {
  }

}
