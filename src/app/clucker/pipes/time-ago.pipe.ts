import { Pipe, PipeTransform } from '@angular/core';
import TimeAgo from 'javascript-time-ago';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    const d = new Date(value);
    const timeAgo = new TimeAgo('en-US');
    return timeAgo.format(d);
  }

}
