import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredName: string, propName: string): any {
    if(value.length === 0 || filteredName === ''){
      return value;
    }
    let returnArray = [];
    for(let item of value){
      if(item[propName] === filteredName){
        returnArray.push(item);
      }
    }
    return returnArray;
  }
}
