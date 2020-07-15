import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import {Card} from '../../../shared/card';
import {ColumnComponent} from '../column.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit{

  @Input() card:Card;

  @Output() deleteCard = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

}

