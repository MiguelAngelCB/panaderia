import {Producto} from './Producto';

export class ProductoPedido extends Producto{
  constructor(_id: string, _nombre: string, _precio: number, _ingredientes: Array<string>,_idCategoria:string,private _cantidad:number,private _ip:string) {
    super(_id, _nombre, _precio, _ingredientes,_idCategoria);
  }

  get cantidad(): number {
    return this._cantidad;
  }

  set cantidad(value: number) {
    this._cantidad = value;
  }

  get ip(): string {
    return this._ip;
  }

  set ip(value: string) {
    this._ip = value;
  }
}
