import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aEspacio'
})
export class AEspacioPipe implements PipeTransform {

  transform(value: string, buscar: string): any {

    const ValorReemplazo = "";
    return value.replace(buscar,ValorReemplazo);
  }

}
