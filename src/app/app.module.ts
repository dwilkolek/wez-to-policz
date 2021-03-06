import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { BetonComponent } from './beton/beton.component';
import { AboutComponent } from './about/about.component';

import { RouterModule, Routes } from '@angular/router';

import { NumberFormatPipe } from '../pipes/number-format-pipe';
import { DaneWstepneComponent } from './beton/dane-wstepne/dane-wstepne.component';
import { GeometriaStropuComponent } from './beton/geometria-stropu/geometria-stropu.component';
import { OtulinaMinimalnaComponent } from './beton/otulina-minimalna/otulina-minimalna.component';
import { WykresMomentyZginajaceComponent } from './beton/wykres-momenty-zginajace/wykres-momenty-zginajace.component';
import { WykresSilyTnaceComponent } from './beton/wykres-sily-tnace/wykres-sily-tnace.component';
import { D3Service } from 'd3-ng2-service';
import { ObwiednieComponent } from './beton/obwiednie/obwiednie.component';
import { ZbrojenieComponent } from './beton/zbrojenie/zbrojenie.component';

export const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'beton', component: BetonComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    BetonComponent,
    AboutComponent,
    NumberFormatPipe,
    DaneWstepneComponent,
    GeometriaStropuComponent,
    OtulinaMinimalnaComponent,
    ObwiednieComponent,

    ZbrojenieComponent,
    WykresMomentyZginajaceComponent,
    WykresSilyTnaceComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
