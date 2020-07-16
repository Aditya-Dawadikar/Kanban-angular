import { Component, OnInit, Input } from '@angular/core';
import {Card} from '../shared/card';
import {ColumnComponent} from '../body/column/column.component';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.css']
})
export class CardModalComponent implements OnInit {

  newCard:Card;

  showclass:"show";
  hideClass:"hide";

  public tohide=false;

  constructor() { }

  ngOnInit(): void {
  }

  createCard(){
    this.tohide=false;
  }

  hideModal(){
    this.tohide=true;
  }

}
