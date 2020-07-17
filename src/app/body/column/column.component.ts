import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';
import {CardComponent} from './card/card.component';
import {CARDS} from '../../shared/mock-card';
import {Card} from '../../shared/card';
import {Column} from '../../shared/column';
import {BodyComponent} from '../body.component';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  cards=CARDS;

  @Output() deleteColumn = new EventEmitter();
  @Output() addCardEmitter = new EventEmitter();
  @Input() column:Column;

  constructor() { }

  ngOnInit(): void {
  }

  deleteCard(card){
    let index=this.cards.indexOf(card);
    console.log("index:"+index);
    this.cards.splice(index,1);
    console.log(this.cards);
  }

}
