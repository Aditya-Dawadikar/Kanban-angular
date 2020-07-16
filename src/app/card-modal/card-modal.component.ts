import { Component, OnInit, Input } from '@angular/core';
import {Card} from '../shared/card';
import {ColumnComponent} from '../body/column/column.component';
import {CARDS} from '../shared/mock-card';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.css']
})
export class CardModalComponent implements OnInit {

  newCard={
    columnName:"Todo",
    task:"",
    id:0
  };
  public tohide=false;

  constructor() { }

  ngOnInit(): void {
  }

  createCard(task,id){
    this.newCard.task=task;
    this.newCard.id=id;
    CARDS.push(this.newCard);
  }

}
