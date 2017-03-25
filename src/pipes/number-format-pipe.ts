import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'formatNumber'})
export class NumberFormatPipe implements PipeTransform {
  transform(value: number, zeros: number): string {
    var pow = Math.pow(10, zeros ? zeros : 2);
    if (!value) {
      return;
    }
    return (Math.round(value * pow)/pow).toString();
  }
}