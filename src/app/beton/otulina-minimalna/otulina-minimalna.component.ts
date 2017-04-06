import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-otulina-minimalna',
  templateUrl: './otulina-minimalna.component.html',
  styleUrls: ['./otulina-minimalna.component.css']
})
export class OtulinaMinimalnaComponent implements OnInit {


  @Input() c_min_dur: number;
  @Input() c_min_b: number;
  @Input() fiG: number;
  @Input() c_dev: number;
  @Input() hp: number;
  @Input() rozpPlyty: number;
  @Input() bz: number;

  // c_min_value: number;
  // c_nom_value: number;

  @Output() onCMin: EventEmitter<number> = new EventEmitter<number>();
  @Output() onCNom: EventEmitter<number> = new EventEmitter<number>();
  @Output() onDp: EventEmitter<number> = new EventEmitter<number>();
  @Output() onLeff: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {

  }

  policz() {
    this.onCMin.emit(this.c_min());
    this.onCNom.emit(this.c_nom());
    this.onDp.emit(this.dp());
    this.onLeff.emit(this.l_eff());
  }



  l_eff() {
    return (this.rozpPlyty - this.bz) + 2 * (Math.min(this.hp / 2, this.bz / 2));
  }


  c_min() {
    return Math.max(this.c_min_b, this.c_min_dur, 10);
  }

  c_nom() {
    return this.c_min() + this.c_dev;
  }
  dp() {
    return this.hp * 100 - (this.c_nom() * 0.1 + 0.1 * this.fiG / 2);
  }

}
