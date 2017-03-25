import { KlasaBetonu } from './klasa-betonu';
import { GatunekStali } from './gatunek-stali';

export class BetonModelObliczen {
  paramBet: number = 1.4;
  paramStal: number = 1.15;
  rozpPlyty: number;
  rozpZebra: number;
  zmienneD: number;
  staleD: number;
  klasaB: string;
  gatunekS: string;
  c_min_dur: number;
  c_min_b: number;
  c_dev: number = 10;
  hp: number;
  hz: number;
  bz: number;
  fiG: number;
  fiM: number;
 hp_min(){
   return 1/35 * this.rozpZebra;
 }
 hp_max(){
   return 1/25 * this.rozpZebra;
 }
 hz_min(){
   return 1/18 * this.rozpPlyty;
 }
 hz_max(){
   return 1/15 * this.rozpPlyty;
 }
 bz_min(){
   return 1/2.5 * this.hz;
 }
 bz_max(){
   return 1/2 * this.hz;
 }
 c_min(){
   return Math.max(this.c_min_b, this.c_min_dur, 10);
 }
 c_nom(){
   return this.c_min() + this.c_dev;
 }
dp(){
  return this.hp * 100 - (this.c_nom() * 0.1 + 0.1 * this.fiG/2);
}
}