import { Component, OnInit, OnChanges, ElementRef, Input } from '@angular/core';
import { D3Service, D3, Selection } from 'd3-ng2-service';
import { NumberFormatPipe } from '../../../pipes/number-format-pipe';

@Component({
  selector: 'app-wykres-sily-tnace',
  templateUrl: './wykres-sily-tnace.component.html',
  styleUrls: ['./wykres-sily-tnace.component.css']
})
export class WykresSilyTnaceComponent implements OnInit, OnChanges {

  @Input() dane: number[];
  daneGorne: number[];
  daneDolne: number[];

  format = new NumberFormatPipe();

  private d3: D3; // <-- Define the private member which will hold the d3 reference
  private parentNativeElement: any;

  constructor(element: ElementRef, d3Service: D3Service) { // <-- pass the D3 Service into the constructor
    this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
    this.parentNativeElement = element.nativeElement;
  }
  lineStartX = 50;
  lineEndX = 800;
  lineY = 120;
  lineYMarg = 10;
  svgContainer;
  ngOnInit() {
    this.prepareData();
    this.ngOnChanges(null);
  }

  ngOnChanges(x) {
    this.prepareData();
    this.clear();
    if (this.validate()) {
      this.draw();
    }

  }

  prepareData() {
    this.daneGorne = [0].concat(<number[]>JSON.parse(JSON.stringify(this.dane))).concat([0]);
    this.daneDolne = [0].concat(<number[]>JSON.parse(JSON.stringify(this.dane))).map(value => {
      return -1 * value;
    }).concat([0]);
    this.daneDolne.reverse();

    console.log(this.daneGorne, this.daneDolne);
  }
  validate() {
   return Array.isArray(this.dane) && this.dane.filter((e)=> {return e ? true : false;}).length == 10;
  }
  clear() {
    if (this.svgContainer) {
      this.svgContainer.remove()
    }
  }
  draw() {
    this.svgContainer = this.d3.select(this.parentNativeElement).append("svg")
      .attr("width", this.lineStartX + this.lineEndX+50)
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
          .attr("stroke", "black");
        this.svgContainer.append("text")
          .attr("x", this.lineStartX - 5 + i * (this.lineEndX - this.lineStartX) / 5)
          .attr("y", yFn(0) + 40)
          // .attr("dy", (index % 2 == 0) ? "-4px" : "12px")
          .attr("dx", "-1.5em")
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

      this.wykres(this.svgContainer, this.daneGorne, "blue");
      this.wykres(this.svgContainer, this.daneDolne, "green");

      // Do more D3 things


    }
  }

  trojkatPunkty(index: number): any {
    var yFn = this.yFn();
    let basicYOffset = yFn(0);
    let basicXOffset = this.lineStartX;
    let Xdiff = 10;
    let YDiff = 20;
    let indexOffset = index * (this.lineEndX - this.lineStartX) / 5;
    return [
      [basicXOffset + indexOffset, basicYOffset].join(','),
      [basicXOffset - Xdiff + indexOffset, basicYOffset + YDiff].join(','),
      [basicXOffset + Xdiff + indexOffset, basicYOffset + YDiff].join(',')
    ].join(' ')
  }


  wykres(svgContainer, dane, color) {
    let d3 = this.d3;


    var yFn = this.yFn();
    var xFn = this.xFn(dane);



    let localIndex = 0;
    let daneDlaLini = (<number[]>JSON.parse(JSON.stringify(dane))).map((value, index) => {
      localIndex += (index % 2 == 0 && index > 1 ? 1 : 0);
      return [localIndex, value];
    })

    this.linia(daneDlaLini, svgContainer, yFn, xFn, color);

    for (let i = 0; i < daneDlaLini.length; i++) {
      this.addText(i, svgContainer, xFn(daneDlaLini[i][0]), yFn(daneDlaLini[i][1]), daneDlaLini[i][1].toString());
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
      // .attr("dy", (index % 2 == 0) ? "-4px" : "12px")
      // .attr("dx", (this.yFn()(0) == y) ? "-0.25em" : "-1.5em")
      .style("font-size", "10px")
      .text(this.format.transform(parseFloat(text), 3));
  }

  yFn() {
    let d3 = this.d3;
    return d3.scaleLinear().domain([this.max(this.allData()), this.min(this.allData())]).range([this.lineYMarg, this.lineY * 2 - 2 * this.lineYMarg]);
  }
  xFn(daneGorneSet) {
    let d3 = this.d3;
    return d3.scaleLinear().domain([0, daneGorneSet.length / 2 - 1]).range([this.lineStartX, this.lineEndX]);
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

  linia(dane: number[][], svgContainer, yFn, xFn, color) {
    let d3 = this.d3;


    var line = d3.line()
      .x(function (d) { return xFn(d[0]); })
      .y(function (d) { return yFn(d[1]); })
      .curve(d3.curveLinear);

    svgContainer.append("path")
      .datum(dane)
      .attr("class", "line")
      .attr("d", line)
      .attr("stroke", color)
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
