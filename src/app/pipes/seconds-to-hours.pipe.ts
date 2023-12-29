import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'secondsToHours',
  standalone: true,
})
export class SecondsToHoursPipe implements PipeTransform {
  transform(value: number): string {
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    // const seconds = value % 60;

    // Pad the minutes and seconds with leading zeros, if required
    const hoursStr = hours.toString();
    const minutesStr = (minutes < 10 ? '0' : '') + minutes;
    // const secondsStr = (seconds < 10 ? '0' : '') + seconds;

    // Format the time string
    return `${hoursStr}.${minutesStr}`;
  }
}
