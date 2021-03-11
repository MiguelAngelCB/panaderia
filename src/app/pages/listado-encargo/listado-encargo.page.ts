import { Component, OnInit } from '@angular/core';
import { Producto } from '../../core/model/Producto';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {ProductoPedido} from '../../core/model/ProductoPedido';
import {ListadoEncargoService} from '../../shared/listado-encargo.service';

@Component({
  selector: 'app-listado-encargo',
  templateUrl: './listado-encargo.page.html',
  styleUrls: ['./listado-encargo.page.scss'],
})
export class ListadoEncargoPage implements OnInit {
  public productos:Map<string,ProductoPedido>=new Map<string,ProductoPedido>();

  constructor(private router:Router,private listadoService:ListadoEncargoService) {
    this.productos=this.listadoService.productos;
  }

  ngOnInit() {
  }

  async verFactura(){
    let extrasNavegacion: NavigationExtras = {
      state: {
        listado: this.productos,
        precioTotal: this.listadoService.getPrecioTotal(),
      },
    };
    this.productos=new Map<string, ProductoPedido>();
    this.listadoService.vaciarListado();
    await this.router.navigate(["factura"],extrasNavegacion);
  }
}
