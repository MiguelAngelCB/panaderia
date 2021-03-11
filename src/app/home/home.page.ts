import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Producto } from '../core/model/Producto';
import {ProductoService} from '../shared/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public productos:Array<Producto>=[];
  public textSeachBar:string="";

  constructor(private router:Router,private productoService:ProductoService) {
    this.productos=this.productoService.productos;
  }

  async verProducto(producto:Producto){
    let extrasNavegacion: NavigationExtras = {
      state: {
        producto: producto,
      },
    };
    await this.router.navigate(["producto"],extrasNavegacion);
  }
  buscar(event):void{
    this.textSeachBar=event.detail.value;
  }
}
