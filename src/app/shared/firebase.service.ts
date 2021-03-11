import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {IpService} from '../core/service/ip.service';
import {ProductoPedido} from '../core/model/ProductoPedido';
import {Factura} from '../core/model/Factura';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore,private ipService:IpService) { }

  getCategoria(){
  return this.db.collection("categoria").ref.orderBy("id");
  }

  getProducto(){
    return this.db.collection("producto").snapshotChanges();
  }

  getFactura(){
    return this.db.collection("factura").snapshotChanges();
  }

  getListadoEncargo(){
    return this.filtroListadoEncargoIp().get();
  }

  addListadoEncargo(producto:ProductoPedido):void{
    producto.ip=this.ipService.ip;
    this.db.collection("listadoEncargo").add(Object.assign({},producto));
  }

  addBill(factura:Factura):void{
    let arrayProductos = factura.productosPedido.map(value => {
      return Object.assign({}, value);
    });
    this.db.collection("factura").add({productos:arrayProductos,codigo:factura.codigo,ip:factura.ip,precioTotal:factura.totalFactura});
  }

  actualizarProductoListadoEncargo(producto:ProductoPedido):void{
    this.filtroProductoListadoEncargo(producto).then(querySnapshot => {
      querySnapshot.forEach(doc => {
        doc.ref.update({cantidad:producto.cantidad});
      });
    });
  }

  eliminarProductoListadoEncargo(producto:ProductoPedido){
    this.filtroProductoListadoEncargo(producto).then(querySnapshot => {
      querySnapshot.forEach(doc => {
        doc.ref.delete();
      });
    });
  }

  eliminarProductosListadoEncargoIp():void{
    this.filtroListadoEncargoIp().get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        doc.ref.delete();
      });
    });
  }

  filtroListadoEncargoIp(){
    let filtroIp=this.db.collection('listadoEncargo').ref.where('ip','==',this.ipService.ip);
    return filtroIp;
  }

  filtroProductoListadoEncargo(producto:ProductoPedido){
    let filtroIdProducto=this.filtroListadoEncargoIp().where('_id','==',producto.id).get();
    return filtroIdProducto;
  }

}
