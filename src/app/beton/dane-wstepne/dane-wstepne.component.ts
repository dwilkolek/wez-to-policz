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

  @Output() onRozpPlyty: EventEmitter<number> = new EventEmitter<number>();
  @Output() onRozpZebra: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  emitPlyty() {
    this.onRozpPlyty.emit(this.rozpPlyty);
  }
  emitZebra() {
    this.onRozpZebra.emit(this.rozpZebra);
  }

}
