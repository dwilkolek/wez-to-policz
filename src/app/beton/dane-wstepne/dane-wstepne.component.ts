import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {BetonModelObliczen} from '../model';

@Component({
  selector: 'app-dane-wstepne',
  templateUrl: './dane-wstepne.component.html',
  styleUrls: ['./dane-wstepne.component.css']
})
export class DaneWstepneComponent implements OnInit {

  @Input() rozpPlyty: number;
  @Input() rozpZebra: number;
  @Input() klasaB: string;
  @Input() gatunekS: string;

  @Output() onRozpPlyty: EventEmitter<number> = new EventEmitter<number>();
  @Output() onRozpZebra: EventEmitter<number> = new EventEmitter<number>();
  @Output() onKlasaB: EventEmitter<string> = new EventEmitter<string>();
  @Output() onGatunekS: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  emitKlasyB() {
    this.onKlasaB.emit(this.klasaB);
  }

  emitGatunkuS() {
    this.onGatunekS.emit(this.gatunekS);
  }

  emitPlyty() {
    this.onRozpPlyty.emit(this.rozpPlyty);
  }
  emitZebra() {
    this.onRozpZebra.emit(this.rozpZebra);
  }

}
