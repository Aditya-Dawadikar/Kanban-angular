import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {COLUMNS} from '../shared/mock-column';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {

  @Output() columnEmitter= new EventEmitter();

  Columns=COLUMNS;

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteColumnFromArray(column){
    let index=this.Columns.indexOf(column);
    this.Columns.splice(index,1);
  }
}
