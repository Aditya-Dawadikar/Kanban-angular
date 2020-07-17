import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ColumnComponent } from './body/column/column.component';
import { BodyComponent } from './body/body.component';
import { CardComponent } from './body/column/card/card.component';
import { AddColumnComponent } from './add-column/add-column.component';
import { CardModalComponent } from './card-modal/card-modal.component';
import { ColumnModalComponent } from './column-modal/column-modal.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddCardFloatComponent } from './add-card-float/add-card-float.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ColumnComponent,
    BodyComponent,
    CardComponent,
    AddColumnComponent,
    CardModalComponent,
    ColumnModalComponent,
    LoginComponent,
    SignupComponent,
    AddCardFloatComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
