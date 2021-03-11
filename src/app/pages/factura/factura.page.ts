import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FacturaService} from '../../core/service/factura.service';
import {Factura} from '../../core/model/Factura';
import {ProductoPedido} from '../../core/model/ProductoPedido';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.page.html',
  styleUrls: ['./factura.page.scss'],
})
export class FacturaPage implements OnInit {
  factura:Factura;

  constructor(public router: Router, private rutaActivada: ActivatedRoute,private facturaService:FacturaService) {
    this.rutaActivada.queryParams.subscribe(() => {
      let listado = this.router.getCurrentNavigation().extras.state.listado;
      let precioTotal = this.router.getCurrentNavigation().extras.state.precioTotal;
      this.facturaService.generarFactura(listado,precioTotal);
      this.factura=this.facturaService.factura;
    });
  }

  ngOnInit() {
  }

  public get listadoFactura():Array<ProductoPedido>{
    return this.factura.productosPedido;
  }
}
