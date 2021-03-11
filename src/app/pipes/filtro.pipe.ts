import { Pipe, PipeTransform } from '@angular/core';
import {Producto} from '../core/model/Producto';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(array: Producto[], texto: string): any[] {
    if (texto===''){
      return array;
    }
    texto=texto.toLowerCase();
    return array.filter(item=>{
      return item.nombre.toLowerCase().includes(texto);
    });
  }

}
