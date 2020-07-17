import { Component, OnInit, Input } from '@angular/core';
import {Card} from '../shared/card';
import {ColumnComponent} from '../body/column/column.component';
import {CARDS} from '../shared/mock-card';
import { COLUMNS } from '../shared/mock-column';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.css']
})
export class CardModalComponent implements OnInit {

  COLUMNS=COLUMNS;
  newCard={
    columnName:"Todo",
    task:"",
    status:""
  };
  public tohide=false;

  constructor() { }

  ngOnInit(): void {
  }

  createCard(columnName,task){
    //console.log(columnName);
    if(COLUMNS.length===0){
      alert("you must add a column first!");
    }else
    if(columnName!=""){
      this.newCard.task=task;
      this.newCard.columnName=columnName;

      let index = COLUMNS.findIndex(column => column.columnName ===columnName);
      this.newCard.status=COLUMNS[index].columnType;
      //console.log(this.newCard.status);
      CARDS.push(this.newCard);
    }else{
      alert("Card must belong to a column");
    }
  }

}
