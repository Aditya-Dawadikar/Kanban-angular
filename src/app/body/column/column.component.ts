import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';
import {CardComponent} from './card/card.component';
import {CARDS} from '../../shared/mock-card';
import {Card} from '../../shared/card';
import {Column} from '../../shared/column';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  cards=CARDS;

  col:Column;

  @Output() deleteColumn = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addCard(){
    this.cards.push({
      task:"new task",
      id:100
    })
  }

  deleteCard(card){
    this.cards.pop();
  }

  cancelButton(){
    this.cards.pop();
  }
}
