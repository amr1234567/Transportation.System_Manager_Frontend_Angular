import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'egyptianPound'
})
export class EgyptianPoundPipe implements PipeTransform {
  transform(value: number): string {
    if (isNaN(value) || value === null) {
      return '';
    }

    const formattedValue = value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    return `£${formattedValue}`;
  }
}
