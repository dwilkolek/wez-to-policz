import { Component, OnInit } from '@angular/core';
import { KlasaBetonu } from './klasa-betonu';

@Component({
  selector: 'app-beton',
  templateUrl: './beton.component.html',
  styleUrls: ['./beton.component.css']
})
export class BetonComponent implements OnInit {
  rozpPlyty: number;
  rozpZebra: number;
  paramBet: number = 1.4;
  paramStal: number = 1.15;
  klasaB: string;
  klasaS: string;
  ngOnInit() {
    // var x = KlasaBetonu.KLASY_BETONU.C16_20;
    // var z = KlasaBetonu.KLASY_BETONU_PARAMETRY.get(x);
    // console.log(x, z);
    // console.log('------')
    // KlasaBetonu.KLASY_BETONU_PARAMETRY.forEach((el, key) => {
    //   console.log(key, '->',el.text);
    // })
  }

}
