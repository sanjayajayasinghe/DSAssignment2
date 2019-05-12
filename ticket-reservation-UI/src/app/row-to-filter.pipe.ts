import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rowToFilter'
})
export class RowToFilterPipe implements PipeTransform {

  transform(rows: any, to: any): any {
    if(to===undefined) return rows;
    return rows.filter((row)=>row.to.toLowerCase().includes(to.toLowerCase()));
  }

}
