import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ColumnComponent } from './column/column.component';
import { BodyComponent } from './body/body.component';
import { CardComponent } from './card/card.component';
import { AddColumnComponent } from './add-column/add-column.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ColumnComponent,
    BodyComponent,
    CardComponent,
    AddColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
