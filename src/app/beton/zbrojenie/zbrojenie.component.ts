import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { BetonModelObliczen } from '../model';

@Component({
  selector: 'app-zbrojenie',
  templateUrl: './zbrojenie.component.html',
  styleUrls: ['./zbrojenie.component.css']
})
export class ZbrojenieComponent implements OnInit {

  @Input() dp: number;
  @Input() fctm: number;
  @Input() fyk: number;
  @Input() paramStal: number = 1.15;

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
  }

  zbrojenieMinMax() {
    this.onZbrojenieMin.emit(this.zbrojenieMin());
    this.onZbrojenieMax.emit(this.zbrojenieMax());
  }

  zbrojenieMin() {
    return Math.max(0.0013 * 1 * this.dp, 0.26 * 1 * this.dp * this.fctm * this.paramStal / this.fyk);
  }

  zbrojenieMax() {
    return 0.04 * 1 * this.dp;
  }

}
