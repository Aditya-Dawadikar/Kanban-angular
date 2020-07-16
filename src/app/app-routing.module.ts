import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardModalComponent } from '../app/card-modal/card-modal.component';
import {BodyComponent} from '../app/body/body.component';
import {ColumnModalComponent}from  '../app/column-modal/column-modal.component';
import {LoginComponent} from '../app/login/login.component';
import {SignupComponent} from '../app/signup/signup.component';
const routes: Routes = [
  {path:'kanban',component:BodyComponent},
  {path:'newcard',component:CardModalComponent},
  {path:'newcolumn',component:ColumnModalComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
