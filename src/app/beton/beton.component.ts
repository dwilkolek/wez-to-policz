import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beton',
  templateUrl: './beton.component.html',
  styleUrls: ['./beton.component.css']
})
export class BetonComponent implements OnInit {
  private model= {
    name: 'Julka',
    alterEgo: 'Vynn Trixx',
    random: 0
  }
  
  mix: string;

  public itemList = [
      {name:"Apple"},
      {name:"Orange"},
      {name:"Grapes"},
   ];

  constructor() { }

  ngOnInit() {
    this.generujMix();

    setInterval(() => {
      this.model.random = Math.round(Math.random() * 100);
      this.generujMix();
    }, 1000)

  }

   generujMix(e?){
    console.log("generujMix", e)

    this.mix = "NUM: "+this.model.random + "Name:" + this.model.name + " | AlterEgo: "+this.model.alterEgo;
  }

}
