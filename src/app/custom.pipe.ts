import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortURL'
})
export class Custom implements PipeTransform {

  transform(value: string): string {
    return value.split('/')[2];
  }

}
