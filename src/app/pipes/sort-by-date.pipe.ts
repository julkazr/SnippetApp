import { Pipe, PipeTransform } from '@angular/core';
import { DataTest } from 'app/models/snippet.model';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  transform(value: DataTest [],
    sortBy: string,
    ascending?: boolean): DataTest [] {
sortBy = 'date';
value = value.sort(
(a, b) =>
a[sortBy] !== b[sortBy] ? (a[sortBy] > b[sortBy] ? 1 : -1) : 0
);
if (!ascending) {
value = value.reverse();
}
return value;
}

}
