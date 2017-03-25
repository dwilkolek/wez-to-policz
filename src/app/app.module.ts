import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BetonComponent } from './beton/beton.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'beton', component: BetonComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    BetonComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
