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
  c_dev: number;
  c_nom: number;
  hp: number;
  hz: number;
  bz: number;
  dp: number;
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
 
}