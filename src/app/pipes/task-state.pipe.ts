import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskState'
})
export class TaskStatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let options = {};
    if (args?.length > 0) {
      options = {
        'to_do': 'is-warning',
        'done': 'is-success',
        default: 'is-warning',
      };
      
    } else {
      options = {
        'to_do': 'To Do',
        'done': 'Done',
        default: 'To Do',
      };
    }
    return options[value] || options['default'];
  }

}
