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
    task:"new task",
    id:3
  };

  showclass:"show";
  hideClass:"hide";

  public tohide=false;

  constructor() { }

  ngOnInit(): void {
  }

  createCard(){
    CARDS.push(this.newCard);
  }

  hideModal(){
    this.tohide=true;
  }

}
