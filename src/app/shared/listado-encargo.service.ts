import { Injectable } from '@angular/core';
import {ProductoPedido} from '../core/model/ProductoPedido';
import {Producto} from '../core/model/Producto';
import {FirebaseService} from './firebase.service';
import {Pedido} from '../core/model/Pedido';

@Injectable({
  providedIn: 'root'
})
export class ListadoEncargoService {
  private pedido=new Pedido(new Map<string, ProductoPedido>());

  constructor(private fireBaseService:FirebaseService) {
    this.rellenarListado();
  }

  rellenarListado():void{
    this.fireBaseService.getListadoEncargo().then(resp=>{
      resp.forEach((doc:any)=>{
        let data=doc.data();
        this.pedido.addProductoPedido(new ProductoPedido(data._id,data._nombre,data._precio,data._ingredientes,data._idCategoria,data.cantidad,data.ip));
      })
    },error => {
      console.log(error);
    });
  }

  getProductNumber():number{
    return this.pedido.getProductNumber();
  }

  addCantidad(producto:Producto, cantidad:any):void{
    let productoExistente:ProductoPedido=this.pedido.getProducto(producto.id);
    if (productoExistente){
      productoExistente.cantidad+=cantidad;
      this.fireBaseService.actualizarProductoListadoEncargo(productoExistente);
    }else{
      let productoPedido:ProductoPedido=this.pedido.convertProductOrder(producto,cantidad);
      this.pedido.addProductoPedido(productoPedido);
      this.fireBaseService.addListadoEncargo(productoPedido);
    }
  }

  getPrecioCantidad(producto:ProductoPedido):number{
    return this.pedido.getPrecioCantidad(producto);
  }

  getPrecioTotal():number{
    return this.pedido.getPrecioTotal();
  }

  disminuirCantidad(producto:ProductoPedido){
    this.pedido.disminuirCantidad(producto);
    this.fireBaseService.actualizarProductoListadoEncargo(producto);
    if (producto.cantidad<=0) {
      this.eliminarProducto(producto);
    }
  }

  aumentarCantiad(producto:ProductoPedido){
    this.pedido.aumentarCantidad(producto);
    this.fireBaseService.actualizarProductoListadoEncargo(producto);
  }

  eliminarProducto(producto:ProductoPedido) {
    this.pedido.eliminarProducto(producto);
    this.fireBaseService.eliminarProductoListadoEncargo(producto);
  }

  vaciarListado():void{
    this.pedido.eliminarProductos();
    this.fireBaseService.eliminarProductosListadoEncargoIp();
  }

  get productos(): Map<string,ProductoPedido> {
    return this.pedido.productosPedido;
  }
}
