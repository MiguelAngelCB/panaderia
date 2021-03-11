import { Injectable } from '@angular/core';
import { Categoria } from '../core/model/Categoria';
import {FirebaseService} from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private _categorias:Array<Categoria>=new Array<Categoria>();

  constructor(private firebase:FirebaseService) {
    this.rellenarCategorias();
  }
  rellenarCategorias():void {
    this.firebase.getCategoria().get().then(querySnapshot => {
      querySnapshot.forEach((doc:any) => {
        let objeto = new Categoria(doc.id, doc.data().nombre, doc.data().icono);
        this._categorias.push(objeto);
      });
    })
  }
  get categorias(): Array<Categoria> {
    return this._categorias;
  }

}
