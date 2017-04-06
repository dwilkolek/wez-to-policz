import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {BetonModelObliczen} from '../model';
import {KlasaBetonu} from '../klasa-betonu';
import {GatunekStali} from '../gatunek-stali';

@Component({
  selector: 'app-dane-wstepne',
  templateUrl: './dane-wstepne.component.html',
  styleUrls: ['./dane-wstepne.component.css']
})
export class DaneWstepneComponent implements OnInit {

  @Input() rozpPlyty: number;
  @Input() rozpZebra: number;
  @Input() klasaBetonu: string;
  @Input() gatunekStali: string;


  @Output() onRozpPlyty: EventEmitter<number> = new EventEmitter<number>();
  @Output() onRozpZebra: EventEmitter<number> = new EventEmitter<number>();
  @Output() onKlasaB: EventEmitter<number> = new EventEmitter<number>();
  @Output() onGatunekS: EventEmitter<number> = new EventEmitter<number>();

  klasy:any = this.listaDlaKlasBetonu();
  gatunki:any = this.listaDlaGatunkowStali();

  constructor() { }

  ngOnInit() {
  }

  emitPlyty() {
    this.onRozpPlyty.emit(this.rozpPlyty);
  }
  emitZebra() {
    this.onRozpZebra.emit(this.rozpZebra);
  }

  listaDlaKlasBetonu() {
    var list = [];
    var ids = Object.getOwnPropertyNames(KlasaBetonu.KLASY_BETONU);
    ids.forEach(id => {
      list.push({id: id, text: KlasaBetonu.KLASY_BETONU_PARAMETRY.get(id).text});
    })

    return list;
  }
  listaDlaGatunkowStali() {
    var list = [];
    var ids = Object.getOwnPropertyNames(GatunekStali.GATUNKI_STALI);
    ids.forEach(id => {
      list.push({id: id, text: GatunekStali.GATUNKI_STALI_PARAMETRY.get(id).text});
    })

    return list;
  }
  emitfck() {
    this.onKlasaB.emit(KlasaBetonu.KLASY_BETONU_PARAMETRY.get(this.klasaBetonu).fck);
  }

  emitfyk() {
    this.onGatunekS.emit(GatunekStali.GATUNKI_STALI_PARAMETRY.get(this.gatunekStali).fyk);
  }

}
