import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { idgsComponent } from './utl/idgs.component';
import { ievnComponent } from './utl/ievn.component';
import { IricComponent } from './utl/iric/iric.component';
import { SumaComponent } from './utl/formularios/suma/suma.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {OperasModule} from './utl/formularios/operas/operas.module'



@NgModule({
  declarations: [
    AppComponent,
    idgsComponent,
    ievnComponent,
    IricComponent,
    SumaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
