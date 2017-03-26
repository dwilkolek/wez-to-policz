import { Component, OnInit, Input } from '@angular/core';
import {BetonModelObliczen} from '../model';

@Component({
  selector: 'app-otulina-minimalna',
  templateUrl: './otulina-minimalna.component.html',
  styleUrls: ['./otulina-minimalna.component.css']
})
export class OtulinaMinimalnaComponent implements OnInit {
  
  @Input() model: BetonModelObliczen;

  constructor() { }

  ngOnInit() {
    console.log('m',this.model)
  }

}
