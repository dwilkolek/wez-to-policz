import { Component, OnInit, Input, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { TablicaWinkleraModule } from '../tablica-winklera/tablica-winklera.module';
import { BetonModelObliczen } from '../model';

@Component({
  selector: 'app-obwiednie',
  templateUrl: './obwiednie.component.html',
  styleUrls: ['./obwiednie.component.css'],
})
export class ObwiednieComponent implements OnInit, OnChanges {

  @Input() l_eff: number;
  @Input() stale: number;
  @Input() zmienne: number;

  @Output() onMMaxPrzeslo1: EventEmitter<number> = new EventEmitter<number>();
  @Output() onMMaxPodporaB: EventEmitter<number> = new EventEmitter<number>();
  @Output() onMMaxPrzeslo2: EventEmitter<number> = new EventEmitter<number>();
  @Output() onMMaxPodporaC: EventEmitter<number> = new EventEmitter<number>();
  @Output() onMMaxPrzeslo3: EventEmitter<number> = new EventEmitter<number>();

  @Output() onMMinPrzeslo1: EventEmitter<number> = new EventEmitter<number>();
  @Output() onMMinPodporaB: EventEmitter<number> = new EventEmitter<number>();
  @Output() onMMinPrzeslo2: EventEmitter<number> = new EventEmitter<number>();
  @Output() onMMinPodporaC: EventEmitter<number> = new EventEmitter<number>();
  @Output() onMMinPrzeslo3: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.l_eff) {
      this.l_eff = changes.l_eff.currentValue;
      this.liczMomenty();
    }

  }
  liczMomenty() {
    this.onMMaxPrzeslo1.emit(this.mMaxPrzeslo1());
    this.onMMaxPodporaB.emit(this.mMaxPodporaB());
    this.onMMaxPrzeslo2.emit(this.mMaxPrzeslo2());
    this.onMMaxPodporaC.emit(this.mMaxPodporaC());
    this.onMMaxPrzeslo3.emit(this.mMaxPrzeslo3());

    this.onMMinPrzeslo1.emit(this.mMinPrzeslo1());
    this.onMMinPodporaB.emit(this.mMinPodporaB());
    this.onMMinPrzeslo2.emit(this.mMinPrzeslo2());
    this.onMMinPodporaC.emit(this.mMinPodporaC());
    this.onMMinPrzeslo3.emit(this.mMinPrzeslo3());
  }

  liczSily() {
    // tu emity
  }

  tabM = TablicaWinkleraModule.tablicaDlaMomentow;
  tabS = TablicaWinkleraModule.tablicaDlaSil;

  mMaxPrzeslo1(): number {
    return (this.stale * this.tabM.maxPrzeslo1[0] + this.zmienne * this.tabM.maxPrzeslo1[1]) * this.l_eff * this.l_eff;
  }

  mMaxPodporaB(): number {
    return (this.stale * this.tabM.maxPodporaB[0] + this.zmienne * this.tabM.maxPodporaB[1]) * this.l_eff * this.l_eff;
  }

  mMaxPrzeslo2(): number {
    return (this.stale * this.tabM.maxPrzeslo2[0] + this.zmienne * this.tabM.maxPrzeslo2[1]) * this.l_eff * this.l_eff;
  }

  mMaxPodporaC(): number {
    return (this.stale * this.tabM.maxPodporaC[0] + this.zmienne * this.tabM.maxPodporaC[1]) * this.l_eff * this.l_eff;
  }

  mMaxPrzeslo3(): number {
    return (this.stale * this.tabM.maxPrzeslo3[0] + this.zmienne * this.tabM.maxPrzeslo3[1]) * this.l_eff * this.l_eff;
  }

  mMinPrzeslo1() {
    return (this.stale * this.tabM.minPrzeslo1[0] + this.zmienne * this.tabM.minPrzeslo1[1]) * this.l_eff * this.l_eff;
  }

  mMinPodporaB() {
    return (this.stale * this.tabM.minPodporaB[0] + this.zmienne * this.tabM.minPodporaB[1]) * this.l_eff * this.l_eff;
  }

  mMinPrzeslo2() {
    return (this.stale * this.tabM.minPrzeslo2[0] + this.zmienne * this.tabM.minPrzeslo2[1]) * this.l_eff * this.l_eff;
  }

  mMinPodporaC() {
    return (this.stale * this.tabM.minPodporaC[0] + this.zmienne * this.tabM.minPodporaC[1]) * this.l_eff * this.l_eff;
  }

  mMinPrzeslo3() {
    return (this.stale * this.tabM.minPrzeslo3[0] + this.zmienne * this.tabM.minPrzeslo3[1]) * this.l_eff * this.l_eff;
  }

  momentyMin() {

  }

  silyMax() {

  }

  silyMin() {

  }

}
