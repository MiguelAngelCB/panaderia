import {ProductoPedido} from './ProductoPedido';
import {Producto} from './Producto';

export class Pedido{

  constructor(private _productosPedido:Map<string,ProductoPedido>) {
  }

  getProductNumber():number{
    let productNumber:number=0;
    this._productosPedido.forEach((producto)=>{
      productNumber+=producto.cantidad;
    });
    return productNumber;
  }

  addProductoPedido(productoPedido:ProductoPedido):void{
      this._productosPedido.set(productoPedido.id,productoPedido);
  }

  convertProductOrder(producto:Producto, cantidad):ProductoPedido{
    let productoPedido:ProductoPedido=Object.create(producto);
    productoPedido.cantidad=cantidad;
    for (let key in producto){
      productoPedido[key]=producto[key];
    }
    return productoPedido;
  }

  getPrecioCantidad(producto:ProductoPedido):number{
    let precioCantidad:number=this.round(producto.cantidad*producto.precio);
    return precioCantidad;
  }

  round(num){
    return Math.round(num*10)/10;
  }

  getPrecioTotal():number{
    let total:number=0;
    this._productosPedido.forEach((producto,id)=>{
      total+=this.getPrecioCantidad(producto);
    });
    return this.round(total);
  }

  disminuirCantidad(producto:ProductoPedido){
    producto.cantidad--;
  }

  aumentarCantidad(producto:ProductoPedido){
    producto.cantidad++;
  }

  eliminarProducto(producto:ProductoPedido) {
    this._productosPedido.delete(producto.id);
  }

  getProducto(id): ProductoPedido {
    return this._productosPedido.get(id);
  }

  eliminarProductos(){
    this._productosPedido=new Map<string, ProductoPedido>();
  }

  get productosPedido(): Map<string, ProductoPedido> {
    return this._productosPedido;
  }
}
