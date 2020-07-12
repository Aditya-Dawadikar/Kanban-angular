import { Component, OnInit ,Input} from '@angular/core';
import {Card} from '../../../shared/card';
import {ColumnComponent} from '../column.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit{

  @Input() taskDescription:string;

  card:Card={
    task:this.taskDescription
  }


  constructor() {}

  ngOnInit(): void {
  }

}

