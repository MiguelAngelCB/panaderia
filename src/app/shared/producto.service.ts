import { Injectable } from '@angular/core';
import {FirebaseService} from './firebase.service';
import {Producto} from '../core/model/Producto';
import {Categoria} from '../core/model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private _productos:Array<Producto>=new Array<Producto>();
  constructor(private firebase:FirebaseService) {
    this.rellenarProductos();
  }
  rellenarProductos():void {
    this._productos=new Array<Producto>();
    this.firebase.getProducto().subscribe(resp=>{
      resp.forEach((e:any)=>{
        let doc=e.payload.doc;
        let data=doc.data();
        this.productos.push(new Producto(doc.id,data.nombre,data.precio,data.ingredientes,data.idCategoria));
      })
    },error => {
      console.log(error);
    });
  }
  obtenerProductosCategoria(categoria:Categoria):Promise<any> {
  let productosCategoria:Array<Producto>=new Array<Producto>();
    return new Promise((resolve, reject)=>{
      productosCategoria=new Array<Producto>()
      productosCategoria=this.productos.filter(item=>{
        return item.idCategoria.includes(categoria.id);
      })
      resolve(productosCategoria);
    });
  }
  get productos(): Array<Producto> {
    return this._productos;
  }
}
