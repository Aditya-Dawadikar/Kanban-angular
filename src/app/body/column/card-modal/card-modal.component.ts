import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Card} from '../../../shared/card';
import {CARDS} from '../../../shared/mock-card';
import { COLUMNS } from '../../../shared/mock-column';
import {ProgressBarComponent} from '../../progress-bar/progress-bar.component';

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
    if(COLUMNS.length===0){
      alert("you must add a column first!");
    }else
    if(columnName!=""){
      this.newCard.task=task;
      this.newCard.columnName=columnName;

      let index = COLUMNS.findIndex(column => column.columnName ===columnName);
      this.newCard.status=COLUMNS[index].columnType;
      CARDS.push(this.newCard);
    }else{
      alert("Card must belong to a column");
    }
  }

}
