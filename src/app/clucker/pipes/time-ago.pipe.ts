import { Pipe, PipeTransform } from '@angular/core';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
      TimeAgo.addDefaultLocale(en);
      const timeAgo = new TimeAgo('en-US');
      return timeAgo.format(value.getTime());
  }

}
