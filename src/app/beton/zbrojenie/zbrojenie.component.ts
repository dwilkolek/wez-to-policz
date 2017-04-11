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
  paramStal: number = 1.15;

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

  constructor() { }

  ngOnInit() {
    this.ngOnChanges();
  }

  ngOnChanges() {
    this.zbrojenieMin();
    this.zbrojenieMax();
    this.zbrojenieMinMax();
  }

  zbrojenieMinMax(

  ) {
    this.onZbrojenieMin.emit(this._zbrojenieMin);
    this.onZbrojenieMax.emit(this._zbrojenieMax);
  }
  _zbrojenieMin;
  zbrojenieMin() {
    console.log(Math.max(0.0013 * 100 * this.dp, 0.26 * 100 * this.dp * this.fctm * this.paramStal / this.fyk), '<<', 0.0013 * 100 * this.dp, 0.26 * 100 * this.dp * this.fctm * this.paramStal / this.fyk)
    this._zbrojenieMin = Math.max(0.0013 * 100 * this.dp, 0.26 * 100 * this.dp * this.fctm * this.paramStal / this.fyk);
  }
  _zbrojenieMax;
  zbrojenieMax() {
    this._zbrojenieMax = 0.04 * 100 * this.dp;
  }

}
