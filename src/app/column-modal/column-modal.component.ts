import { Component, OnInit } from '@angular/core';
import {Card} from '../shared/card';
import {ColumnComponent} from '../body/column/column.component';
import {CARDS} from '../shared/mock-card';
import {COLUMNS} from '../shared/mock-column';
import { Column } from '../shared/column';

@Component({
  selector: 'app-column-modal',
  templateUrl: './column-modal.component.html',
  styleUrls: ['./column-modal.component.css']
})
export class ColumnModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newColumn={
    columnName:"",
    cards:[]
  }

  showclass:"show";
  hideClass:"hide";

  public tohide=false;

  createColumn(columnName){
    this.newColumn.columnName=columnName;
    COLUMNS.push(this.newColumn);
  }

  hideModal(){
    this.tohide=true;
  }
}
