import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { BetonModelObliczen } from '../model';

@Component({
  selector: 'app-zbrojenie',
  templateUrl: './zbrojenie.component.html',
  styleUrls: ['./zbrojenie.component.css']
})
export class ZbrojenieComponent implements OnInit, OnChanges {

  @Input() dp: number;
  @Input() fctm: number;
  @Input() fyk: number;
  @Input() fck: number;
  paramStal: number = 1.15;
  paramBet: number = 1.4;
  ksiLimes: number = 0.493;
  eta: number = 1;
  mi: number;
  ksiEff: number;
  zc: number;
  b: number = 1;

  @Input() mMaxPrzeslo1: number;
  @Input() mMaxPodporaB: number;
  @Input() mMaxPrzeslo2: number;
  @Input() mMaxPodporaC: number;
  @Input() mMaxPrzeslo3: number;

  @Input() mMinPrzeslo1: number;
  @Input() mMinPodporaB: number;
  @Input() mMinPrzeslo2: number;
  @Input() mMinPodporaC: number;
  @Input() mMinPrzeslo3: number;

  @Output() onZbrojenieMin: EventEmitter<number> = new EventEmitter<number>();
  @Output() onZbrojenieMax: EventEmitter<number> = new EventEmitter<number>();
  @Output() onZbrojenieDolne1: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.ngOnChanges();
  }

  ngOnChanges() {
    this.zbrojenieMin();
    this.zbrojenieMax();
    this.zbrojenieMinMax();
    this.zbrojenieDolne1();
    this.zbrojenieTeoretyczne();
  }

  zbrojenieMinMax(

  ) {
    this.onZbrojenieMin.emit(this._zbrojenieMin);
    this.onZbrojenieMax.emit(this._zbrojenieMax);
  }

  zbrojenieTeoretyczne() {
    this.onZbrojenieDolne1.emit(this._zbrojenieDolne1);
  }

  _zbrojenieMin;
  zbrojenieMin() {
    this._zbrojenieMin = Math.max(0.0013 * 100 * this.dp, 0.26 * 100 * this.dp * this.fctm * this.paramStal / this.fyk);
  }

  _zbrojenieMax;
  zbrojenieMax() {
    this._zbrojenieMax = 0.04 * 100 * this.dp;
  }

  liczZc(MEd: number) {
    this.mi = MEd / (this.b * this.dp * this.dp * this.eta * (this.fck / this.paramBet));
    this.ksiEff = 1 - Math.sqrt(1 - 2 * this.mi);
    return this.zc = (1 - 0.5 * this.ksiEff) * this.dp;
  }

  _zbrojenieDolne1: number;
  zbrojenieDolne1() {
    this.liczZc(this.mMaxPrzeslo1);
    return this._zbrojenieDolne1 = 1000 * this.mMaxPrzeslo1 / (this.zc * this.fyk / this.paramStal);
  }

}
