import { Component, OnInit, OnChanges, ElementRef, Input } from '@angular/core';
import { D3Service, D3, Selection } from 'd3-ng2-service';
import { NumberFormatPipe } from '../../../pipes/number-format-pipe';

@Component({
  selector: 'app-momenty-zginajace',
  templateUrl: './momenty-zginajace.component.html',
  styleUrls: ['./momenty-zginajace.component.css']
})
export class MomentyZginajaceComponent implements OnInit, OnChanges {

  @Input() daneGorne: number[];
  @Input() daneDolne: number[];

  format = new NumberFormatPipe();

  private d3: D3; // <-- Define the private member which will hold the d3 reference
  private parentNativeElement: any;

  constructor(element: ElementRef, d3Service: D3Service) { // <-- pass the D3 Service into the constructor
    this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
    this.parentNativeElement = element.nativeElement;
  }
  lineStartX = 20;
  lineEndX = 820;
  lineY = 120;
  lineYMarg = 10;
  svgContainer;
  ngOnInit() {
    this.ngOnChanges(null);
  }
  ngOnChanges(x) {
    console.log(this.daneGorne, x);
    this.clear();
    if (this.validate()) {
      this.draw();
    }

  }
  validate() {
    var arr: boolean = Array.isArray(this.daneGorne) && Array.isArray(this.daneDolne);
    var gora = (this.daneGorne.length - 3) % 2 == 0 && this.daneGorne.filter((e)=> {return e ? true : false;}).length >= 5;
    var dol = (this.daneDolne.length - 3) % 2 == 0 && this.daneDolne.filter((e)=> {return e ? true : false;}).length >= 5;
    return arr && gora && dol;
  }
  clear() {
    if (this.svgContainer) {
      this.svgContainer.remove()
    }
  }
  draw() {
    this.svgContainer = this.d3.select(this.parentNativeElement).append("svg")
      .attr("width", this.lineStartX + this.lineEndX)
      .attr("height", this.lineY * 2)
      .classed("center", true);
    let d3 = this.d3; // <-- for convenience use a block scope variable
    let d3ParentElement: Selection<any, any, any, any>; // <-- Use the Selection interface (very basic here for illustration only)

    if (this.parentNativeElement !== null) {

      // d3ParentElement = d3.select(this.parentNativeElement); // <-- use the D3 select method


      var yFn = this.yFn();
      var os = this.svgContainer.append("line")
        .attr("x1", this.lineStartX)
        .attr("y1", yFn(0))
        .attr("x2", this.lineEndX)
        .attr("y2", yFn(0))
        .attr("stroke-width", 2)
        .attr("stroke", "black");
      for (let i = 0; i < 6; i++) {
        this.svgContainer.append("polygon")
          .attr("points", (d) => { return this.trojkatPunkty(i) })
          .attr("fill", "none")
          .attr("stroke", "blue");
        this.svgContainer.append("text")
          .attr("x", this.lineStartX - 5 + i * (this.lineEndX - this.lineStartX) / 5)
          .attr("y", yFn(0) + 40)
          // .attr("dy", (index % 2 == 0) ? "-4px" : "12px")
          // .attr("dx", (this.yFn()(0) == y) ? "-0.25em" : "-1.5em")
          .style("font-size", "14px")
          .text(function () {
            switch (i) {
              case 0:
              case 5:
                return "A";
              case 1:
              case 4:
                return "B";
              case 2:
              case 3:
                return "C";
            }
          });
      }

      this.wykres(this.svgContainer, this.daneGorne);
      this.wykres(this.svgContainer, this.daneDolne);

      // Do more D3 things


    }
  }

  trojkatPunkty(index: number): any {
    var yFn = this.yFn();
    let basicYOffset = yFn(0);
    let basicXOffset = 20;
    let Xdiff = 10;
    let YDiff = 20;
    let indexOffset = index * (this.lineEndX - this.lineStartX) / 5;
    return [
      [basicXOffset + indexOffset, basicYOffset].join(','),
      [basicXOffset - Xdiff + indexOffset, basicYOffset + YDiff].join(','),
      [basicXOffset + Xdiff + indexOffset, basicYOffset + YDiff].join(',')
    ].join(' ')
  }


  wykres(svgContainer, dane) {
    let d3 = this.d3;
    let startT: number[] = JSON.parse(JSON.stringify(dane));
    let endT: number[] = JSON.parse(JSON.stringify(dane));
    endT.splice(endT.length - 1, 1);
    endT.reverse();
    let daneGorneSet = [0].concat(startT).concat(endT).concat([0]);
    var yFn = this.yFn();
    var xFn = this.xFn(daneGorneSet);
    for (let i = 0; i < this.ilPar(daneGorneSet); i++) {
      this.luk(i, daneGorneSet, svgContainer, yFn, xFn);
    }
    for (let i = 0; i < daneGorneSet.length; i++) {
      this.addText(i, svgContainer, xFn(i), yFn(daneGorneSet[i]), daneGorneSet[i].toString());
    }
  }

  addText(index: number, svgContainer, x: number, y: number, text: string) {
    // console.log(x, y)
    // svgContainer
    // .append("circle")
    //     .style("stroke", "gray")
    //     .style("fill", "white")
    //     .attr("r", 2)
    //     .attr("cx", x)
    //     .attr("cy", y);
    svgContainer
      .append("text")
      .attr("x", x)
      .attr("y", y)
      .attr("dy", (index % 2 == 0) ? "-4px" : "12px")
      .attr("dx", (this.yFn()(0) == y) ? "-0.25em" : "-1.5em")
      .style("font-size", "10px")
      .text(this.format.transform(parseFloat(text),3));
  }

  yFn() {
    let d3 = this.d3;
    return d3.scaleLinear().domain([this.min(this.allData()) - 20, this.max(this.allData()) + 20]).range([this.lineYMarg, this.lineY * 2 - 2 * this.lineYMarg]);
  }
  xFn(daneGorneSet) {
    let d3 = this.d3;
    return d3.scaleLinear().domain([0, daneGorneSet.length - 1]).range([this.lineStartX, this.lineEndX]);
  }
  allData() {
    return [0].concat(this.daneGorne).concat(this.daneDolne);
  }
  ilPar(set: number[]): number {
    return (set.length - 3) / 2 + 1;
  }
  startIndex(parIndex: number): number {
    return parIndex * 2;
  }
  luk(index: number, dane: number[], svgContainer, yFn, xFn) {
    let d3 = this.d3;

    var line = d3.line()
      .x(function (d) { return xFn(d[0]); })
      .y(function (d) { return yFn(d[1]); })
      .curve(d3.curveCatmullRom);
    let yn = this.getTrioSet(this.startIndex(index), dane);
    let data = [];
    for (let j = 0; j < yn.length; j++) {
      data.push([this.startIndex(index) + j, yn[j]]);
    }
    svgContainer.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line)
      .attr("stroke", "red")
      .attr("fill", "none");


  }

  getTrioSet(index: number, data: number[]) {
    return [data[index], data[index + 1], data[index + 2]];
  }
  min(arr: number[]) {
    let min = null;
    for (let i = 0; i < arr.length; i++) {
      if (!min || min > arr[i]) {
        min = arr[i];
      }
    }
    return min;
  }
  max(arr: number[]) {
    let max = null;
    for (let i = 0; i < arr.length; i++) {
      if (!max || max < arr[i]) {
        max = arr[i];
      }
    }
    return max;
  }

}
