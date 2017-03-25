import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'formatNumber'})
export class NumberFormatPipe implements PipeTransform {
  transform(value: number, numberAfterComa: number): string {
    return value.toPrecision(numberAfterComa);
  }
}