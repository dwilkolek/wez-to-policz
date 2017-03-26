import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { BetonModelObliczen } from '../model';

@Component({
  selector: 'app-geometria-stropu',
  templateUrl: './geometria-stropu.component.html',
  styleUrls: ['./geometria-stropu.component.css']
})
export class GeometriaStropuComponent implements OnInit, OnChanges {

  @Input() rozpPlyty: number;
  @Input() rozpZebra: number;

  hp_min_value: number;
  hp_max_value: number;
  hz_min_value: number;
  hz_max_value: number;
  hp_value: number;
  hz_value: number;
  bz_min_value: number;
  bz_max_value: number;
  bz_value: number;

  @Output() onHpMin: EventEmitter<number> = new EventEmitter<number>();
  @Output() onHpMax: EventEmitter<number> = new EventEmitter<number>();
  @Output() onHzMin: EventEmitter<number> = new EventEmitter<number>();
  @Output() onHzMax: EventEmitter<number> = new EventEmitter<number>();
  @Output() onHp: EventEmitter<number> = new EventEmitter<number>();
  @Output() onHz: EventEmitter<number> = new EventEmitter<number>();
  @Output() onBzMin: EventEmitter<number> = new EventEmitter<number>();
  @Output() onBzMax: EventEmitter<number> = new EventEmitter<number>();
  @Output() onBz: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.policzZebra();
    this.policzPlyty();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.rozpPlyty) {
      this.rozpPlyty = changes.rozpPlyty.currentValue;
      this.policzZebra();
    }
    if (changes.rozpZebra) {
      this.rozpZebra = changes.rozpZebra.currentValue;
      this.policzPlyty();
    }
  }

  policzZebra() {
    this.hz_max_obl();
    this.hz_min_obl();
  }
  policzPlyty() {
    this.hp_max_obl();
    this.hp_min_obl();
  }

  private bz_min_obl() {
    this.bz_min_value = 1 / 2.5 * this.hz_value;
    this.onBzMin.emit(this.bz_min_value);
  }
  private bz_max_obl() {
    this.bz_max_value = 1 / 2 * this.hz_value;
    this.onBzMax.emit(this.bz_max_value);
  }


  private hp_min_obl() {
    this.hp_min_value = 1 / 35 * this.rozpZebra;
    this.onHpMin.emit(this.hp_min_value);
  }
  private hp_max_obl() {
    this.hp_max_value = 1 / 25 * this.rozpZebra;
    this.onHpMax.emit(this.hp_max_value);
  }
  private hz_min_obl() {
    this.hz_min_value = 1 / 18 * this.rozpPlyty;
    this.onHzMin.emit(this.hz_min_value);
  }
  private hz_max_obl() {
    this.hz_max_value = 1 / 15 * this.rozpPlyty;
    this.onHzMax.emit(this.hz_max_value);
  }

  hzChange() {
    this.onHz.emit(this.hz_value);    
    this.bz_max_obl();
    this.bz_min_obl();
  }

  hpChange() {
    this.onHp.emit(this.hp_value);
  }

  bzChange() {
    this.onBz.emit(this.bz_value);
  }

}
