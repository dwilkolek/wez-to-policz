import { Component, OnInit } from '@angular/core';
import { KlasaBetonu } from './klasa-betonu';
import { BetonModelObliczen } from './model';

@Component({
  selector: 'app-beton',
  templateUrl: './beton.component.html',
  styleUrls: ['./beton.component.css']
})
export class BetonComponent implements OnInit {
 
  model:BetonModelObliczen = new BetonModelObliczen();

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
