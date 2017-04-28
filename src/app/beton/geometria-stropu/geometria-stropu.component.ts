import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { NumberFormatPipe } from '../../../pipes/number-format-pipe';

@Component({
  selector: 'app-geometria-stropu',
  templateUrl: './geometria-stropu.component.html',
  styleUrls: ['./geometria-stropu.component.css']
})
export class GeometriaStropuComponent implements OnInit, OnChanges {

  numberFormatter: NumberFormatPipe = new NumberFormatPipe();

  @Input() rozpPlyty: number;
  @Input() rozpZebra: number;

  form: FormGroup;

  hp_min_value: number;
  hp_max_value: number;
  hz_min_value: number;
  hz_max_value: number;
  bz_min_value: number;
  bz_max_value: number;

  @Output() onHpMin: EventEmitter<number> = new EventEmitter<number>();
  @Output() onHpMax: EventEmitter<number> = new EventEmitter<number>();
  @Output() onHzMin: EventEmitter<number> = new EventEmitter<number>();
  @Output() onHzMax: EventEmitter<number> = new EventEmitter<number>();
  @Output() onHp: EventEmitter<number> = new EventEmitter<number>();
  @Output() onHz: EventEmitter<number> = new EventEmitter<number>();
  @Output() onBzMin: EventEmitter<number> = new EventEmitter<number>();
  @Output() onBzMax: EventEmitter<number> = new EventEmitter<number>();
  @Output() onBz: EventEmitter<number> = new EventEmitter<number>();

  constructor(private fb: FormBuilder) {

    this.form = fb.group({
      hp_value: new FormControl('', [
        (control) => { return this.minMaxValidator(control, this.hp_min_value, this.hp_max_value) }
      ]),
      hz_value: new FormControl('', [
        (control) => { return this.minMaxValidator(control, this.hz_min_value, this.hz_max_value) }
      ]),
      bz_value: new FormControl('', [
        (control) => { return this.minMaxValidator(control, this.bz_min_value, this.bz_max_value) }
      ]),
    })

  }

  minMaxValidator(c: any, min: number, max: number) {



    if (c.value >= min && c.value <= max) {
      return;
    }
    if (!min || !max) {
      return;
    }
    return { wrongValue: "Wartość musi być od " + this.numberFormatter.transform(min, 3) + " do " + this.numberFormatter.transform(max, 3) };

  }

  getMinMaxInfo(min, max) {
    return min && max ? '<' + this.numberFormatter.transform(min, 3) + ', ' + this.numberFormatter.transform(max, 3) + '>' : '';
  }
  ngOnInit() {
    this.policzZebra();
    this.policzPlyty();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.rozpPlyty) {
      this.rozpPlyty = changes.rozpPlyty.currentValue;
      this.policzPlyty();
    }
    if (changes.rozpZebra) {
      this.rozpZebra = changes.rozpZebra.currentValue;
      this.policzZebra();
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
    this.bz_min_value = 1 / 2.5 * this.form.controls['hz_value'].value;
    this.onBzMin.emit(this.bz_min_value);
  }
  private bz_max_obl() {
    this.bz_max_value = 1 / 2 * this.form.controls['hz_value'].value;
    this.onBzMax.emit(this.bz_max_value);
  }


  private hp_min_obl() {
    this.hp_min_value = 1 / 35 * this.rozpPlyty;
    this.onHpMin.emit(this.hp_min_value);
  }
  private hp_max_obl() {
    this.hp_max_value = 1 / 25 * this.rozpPlyty;
    this.onHpMax.emit(this.hp_max_value);
  }
  private hz_min_obl() {
    this.hz_min_value = 1 / 18 * this.rozpZebra;
    this.onHzMin.emit(this.hz_min_value);
  }
  private hz_max_obl() {
    this.hz_max_value = 1 / 15 * this.rozpZebra;
    this.onHzMax.emit(this.hz_max_value);
  }

  hzChange() {
    this.onHz.emit(this.form.controls['hz_value'].value);
    this.bz_max_obl();
    this.bz_min_obl();
  }

  hpChange() {
    this.onHp.emit(this.form.controls['hp_value'].value);
  }

  bzChange() {
    this.onBz.emit(this.form.controls['bz_value'].value);
  }

}
