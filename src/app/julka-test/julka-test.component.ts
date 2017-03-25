import { Component, OnInit } from '@angular/core';
import { Dodajnik } from './kalkulator';

@Component({
  selector: 'app-julka-test',
  templateUrl: './julka-test.component.html',
  styleUrls: ['./julka-test.component.css']
})
export class JulkaTestComponent implements OnInit {

 wynik: number;
 dodajnik:Dodajnik = new Dodajnik(0,0);

  constructor() { }

  ngOnInit() {
  }

  policz(a, b?){
    this.wynik = this.dodajnik.wynik();
  }
}
