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
  hz_min: number;
  hz_max: number;
  hp_min: number;
  hp_max: number;
  c_min: number;
  dp: number;
  stale: number;
  zmienne: number;
  l_eff: number;
  fck: number;
  fyk: number;

}