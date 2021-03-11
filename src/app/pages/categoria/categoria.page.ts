import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../core/model/Categoria';
import {Router, ActivatedRoute, NavigationExtras} from '@angular/router';
import {CategoriaService} from '../../shared/categoria.service';
import {Producto} from '../../core/model/Producto';
import {ProductoService} from '../../shared/producto.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {
  public productos:Array<Producto>=[];
  public categoria:Categoria;
  public textSeachBar:string="";

  constructor(public router: Router, private rutaActivada: ActivatedRoute,private productosService:ProductoService) {
    new Promise((resolve)=>{
      this.rutaActivada.queryParams.subscribe(() => {
        this.categoria = this.router.getCurrentNavigation().extras.state.categoria;
      });
      resolve(this.categoria);
    }).then(()=>{
      this.productosService.obtenerProductosCategoria(this.categoria).then((resp)=>{
        this.productos=resp;
      });
    });
  }

  ngOnInit() {
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
