import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviateCount'
})
export class AbbreviateCountPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value / 1000000000 >= 1) {
      return (value / 1000000).toFixed(1) + 'b';
    } else if (value / 1000000 >= 1) {
      return (value / 1000000).toFixed(1) + 'm';
    } else if (value / 1000 >= 1) {
      return (value / 1000).toFixed(1) + 'k';
    }
    return value.toString();
  }

}
