import { Component, OnInit } from '@angular/core';
import { TablicaWinkleraModule } from '../tablica-winklera/tablica-winklera.module';
import { BetonModelObliczen } from '../model';

@Component({
  selector: 'app-obwiednie',
  templateUrl: './obwiednie.component.html',
  styleUrls: ['./obwiednie.component.css'],
})
export class ObwiednieComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  policzMomenty() {
    this.momentyMax();
    this.momentyMin();
  }

  policzSily() {
    this.silyMax();
    this.silyMin();
  }

  momentyMax() {

  }

  momentyMin() {

  }

  silyMax() {

  }

  silyMin() {

  }

}
