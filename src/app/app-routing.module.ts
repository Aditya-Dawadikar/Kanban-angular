import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardModalComponent } from '../app/card-modal/card-modal.component';
import {BodyComponent} from '../app/body/body.component';
import {ColumnModalComponent}from  '../app/column-modal/column-modal.component';
const routes: Routes = [
  {path:'',component:BodyComponent},
  {path:'newcard',component:CardModalComponent},
  {path:'newcolumn',component:ColumnModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
