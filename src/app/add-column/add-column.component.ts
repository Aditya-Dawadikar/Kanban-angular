import { Component, OnInit, Output } from '@angular/core';
import {BodyComponent} from '../body/body.component';
import { ColumnComponent } from '../body/column/column.component';
import {Column} from '../shared/column';

@Component({
  selector: 'app-add-column',
  templateUrl: './add-column.component.html',
  styleUrls: ['./add-column.component.css']
})
export class AddColumnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addColumn(){

  }

}
