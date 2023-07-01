import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { idgsComponent } from './utl/idgs.component';
import { ievnComponent } from './utl/ievn.component';
import { IricComponent } from './utl/iric/iric.component';
import { SumaComponent } from './utl/formularios/suma/suma.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {OperasModule} from './utl/formularios/operas/operas.module';
import { MenuComponent } from './utl/menu/menu.component';
import { AlumnosFilterPipe } from './utl/alumnos-filter.pipe';
import { AlumnoReactiveComponent } from './formularios/alumno-reactive/alumno-reactive.component'
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    idgsComponent,
    ievnComponent,
    IricComponent,
    SumaComponent,
    MenuComponent,
    AlumnosFilterPipe,
    AlumnoReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
