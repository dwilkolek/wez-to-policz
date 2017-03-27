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
  @Output() onKlasaB: EventEmitter<string> = new EventEmitter<string>();
  @Output() onGatunekS: EventEmitter<string> = new EventEmitter<string>();

  klasy:any = this.listaDlaKlasBetonu();
  gatunki:any = this.listaDlaGatunkowStali();

  constructor() { }

  ngOnInit() {
  }

  emitKlasyB() {
    this.onKlasaB.emit(this.klasaBetonu);
  }

  emitGatunkuS() {
    this.onGatunekS.emit(this.gatunekStali);
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

}
