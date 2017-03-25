import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BetonComponent } from './beton/beton.component';
import { AboutComponent } from './about/about.component';

import { RouterModule, Routes } from '@angular/router';

import {NumberFormatPipe} from '../pipes/number-format-pipe'

export const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'beton', component: BetonComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    BetonComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    NumberFormatPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
