import { Component, OnInit, Input } from '@angular/core';
import {AddColumnComponent} from './add-column/add-column.component';
import {COLUMNS} from '../shared/mock-column';
import { Column } from '../shared/column';
import {CARDS} from '../shared/mock-card';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  Columns=COLUMNS;

  constructor() { }

  ngOnInit(): void {
  }

  addColumn(){
    this.Columns.push(
      {cards:CARDS}
    )
  }

  deleteColumn(){
    this.Columns.pop();
  }
}
