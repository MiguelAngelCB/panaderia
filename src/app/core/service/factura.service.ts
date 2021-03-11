import {Injectable} from '@angular/core';
import {Factura} from '../model/Factura';
import {ProductoPedido} from '../model/ProductoPedido';
import {FirebaseService} from '../../shared/firebase.service';
import {IpService} from './ip.service';
import {Producto} from '../model/Producto';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  private _factura: Factura;
  private codigosFacturas: Array<number> = [];

  constructor(private firebaseService: FirebaseService, private ipService: IpService) {
    this.obtenerCodigosFacturas();
  }

  async generarFactura(productos: Map<string, ProductoPedido>, precioTotal: number) {
    let factura: Factura;
    let array: Array<ProductoPedido> = Array.from(productos.values());
    let codigo: number = this.generarCodigo();
    factura = new Factura(array, codigo, this.ipService.ip, precioTotal);
    this._factura = factura;
    await this.firebaseService.addBill(factura);
  }

  obtenerCodigosFacturas() {
    this.firebaseService.getFactura().subscribe(resp => {
      resp.forEach((e: any) => {
        let doc = e.payload.doc;
        let data = doc.data();
        this.codigosFacturas.push(data.codigo);
      });
    }, error => {
      console.log(error);
    });
  };

  generarCodigo(): number {
    let min: number = 1;
    let max: number = 99999;
    let codigo: number;
    do{
      codigo = Math.floor(Math.random() * (max - min + 1) + min);
    }while (this.codigosFacturas.find(x => x == codigo));
    return codigo;
  }

  get factura(): Factura {
    return this._factura;
  }
}
