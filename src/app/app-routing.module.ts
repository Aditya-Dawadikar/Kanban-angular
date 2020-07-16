import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardModalComponent } from '../app/card-modal/card-modal.component';
import {BodyComponent} from '../app/body/body.component';
const routes: Routes = [
  {path:'',component:BodyComponent},
  {path:'newcard',component:CardModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
