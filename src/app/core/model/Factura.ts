import {ProductoPedido} from './ProductoPedido';

export class Factura {
  constructor(private _productosPedido:Array<ProductoPedido>, private _codigo:number,private _ip:string,private _totalFactura:number) {
  }

  get totalFactura(): number {
    return this._totalFactura;
  }

  get productosPedido(): Array<ProductoPedido> {
    return this._productosPedido;
  }

  get codigo(): number {
    return this._codigo;
  }

  get ip(): string {
    return this._ip;
  }
}
