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
  @Output() onZbrojenieDolne2: EventEmitter<number> = new EventEmitter<number>();
  @Output() onZbrojenieGorne2: EventEmitter<number> = new EventEmitter<number>();
  @Output() onZbrojenieDolne3: EventEmitter<number> = new EventEmitter<number>();
  @Output() onZbrojenieGorne3: EventEmitter<number> = new EventEmitter<number>();
  @Output() onZbrojeniePodporaA: EventEmitter<number> = new EventEmitter<number>();
  @Output() onZbrojeniePodporaB: EventEmitter<number> = new EventEmitter<number>();
  @Output() onZbrojeniePodporaC: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.ngOnChanges();
  }

  ngOnChanges() {
    this.zbrojenieMin();
    this.zbrojenieMax();
    this.zbrojenieMinMax();
    this.zbrojenieDolne1();
    this.zbrojenieDolne2();
    this.zbrojenieGorne2();
    this.zbrojenieDolne3();
    this.zbrojenieGorne3();
    this.zbrojeniePodporaA();
    this.zbrojeniePodporaB();
    this.zbrojeniePodporaC();
    this.zbrojenieTeoretyczne();
  }

  zbrojenieMinMax(

  ) {
    this.onZbrojenieMin.emit(this._zbrojenieMin);
    this.onZbrojenieMax.emit(this._zbrojenieMax);
  }

  zbrojenieTeoretyczne() {
    this.onZbrojenieDolne1.emit(this._zbrojenieDolne1);
    this.onZbrojenieDolne2.emit(this._zbrojenieDolne2);
    this.onZbrojenieGorne2.emit(this._zbrojenieGorne2);
    this.onZbrojenieDolne3.emit(this._zbrojenieDolne3);
    this.onZbrojenieGorne3.emit(this._zbrojenieGorne3);
    this.onZbrojeniePodporaA.emit(this._zbrojeniePodporaA);
    this.onZbrojeniePodporaB.emit(this._zbrojeniePodporaB);
    this.onZbrojeniePodporaC.emit(this._zbrojeniePodporaC);
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
    this.mi = MEd / (this.b * this.dp / 100 * this.dp / 100 * this.eta * (this.fck * 1000000 / this.paramBet));
    this.ksiEff = 1 - Math.sqrt(1 - 2 * this.mi);
    return this.zc = (1 - 0.5 * this.ksiEff) * this.dp / 100;
  }

  _zbrojenieDolne1: number;
  zbrojenieDolne1() {
    this.liczZc(1000 * this.mMaxPrzeslo1);
    return this._zbrojenieDolne1 = 10000 * this.mMaxPrzeslo1 * 1000 / (this.zc * this.fyk * 1000000 / this.paramStal);
  }

  _zbrojenieDolne2: number;
  zbrojenieDolne2() {
    this.liczZc(1000 * this.mMaxPrzeslo2);
    return this._zbrojenieDolne2 = 10000 * this.mMaxPrzeslo2 * 1000 / (this.zc * this.fyk * 1000000 / this.paramStal);
  }

  _zbrojenieGorne2: number;
  zbrojenieGorne2() {
    this.liczZc((Math.abs(1000 * this.mMinPodporaB) + Math.abs(1000 * this.mMinPrzeslo2)) / 3);
    return this._zbrojenieGorne2 = 10000 * (Math.abs(1000 * this.mMinPodporaB) + Math.abs(1000 * this.mMinPrzeslo2)) / 3 / (this.zc * this.fyk * 1000000 / this.paramStal);
  }

  _zbrojenieDolne3: number;
  zbrojenieDolne3() {
    this.liczZc(1000 * this.mMaxPrzeslo3);
    return this._zbrojenieDolne3 = 10000 * this.mMaxPrzeslo3 * 1000 / (this.zc * this.fyk * 1000000 / this.paramStal);
  }

  _zbrojenieGorne3: number;
  zbrojenieGorne3() {
    this.liczZc((Math.abs(1000 * this.mMinPodporaC) + Math.abs(1000 * this.mMinPrzeslo3)) / 3);
    return this._zbrojenieGorne3 = 10000 * (Math.abs(1000 * this.mMinPodporaC) + Math.abs(1000 * this.mMinPrzeslo3)) / 3 / (this.zc * this.fyk * 1000000 / this.paramStal);
  }

  _zbrojeniePodporaA: number;
  zbrojeniePodporaA() {
    this.liczZc(0.25 * 1000 * this.mMaxPrzeslo1);
    return this._zbrojeniePodporaA = 10000 * 0.25 * this.mMaxPrzeslo1 * 1000 / (this.zc * this.fyk * 1000000 / this.paramStal);
  }

  _zbrojeniePodporaB: number;
  zbrojeniePodporaB() {
    this.liczZc(Math.abs(1000 * this.mMinPodporaB));
    return this._zbrojeniePodporaB = 10000 * Math.abs(this.mMinPodporaB) * 1000 / (this.zc * this.fyk * 1000000 / this.paramStal);
  }

  _zbrojeniePodporaC: number;
  zbrojeniePodporaC() {
    this.liczZc(Math.abs(1000 * this.mMinPodporaC));
    return this._zbrojeniePodporaC = 10000 * Math.abs(this.mMinPodporaC) * 1000 / (this.zc * this.fyk * 1000000 / this.paramStal);
  }

}
