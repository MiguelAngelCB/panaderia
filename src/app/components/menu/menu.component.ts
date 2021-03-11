import { CategoriaService } from './../../shared/categoria.service';
import { Component, OnInit } from '@angular/core';
import {Categoria} from '../../core/model/Categoria';
import { NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public categorias:Array<Categoria>=new Array<Categoria>();
  constructor(private router:Router,public menuControler:MenuController,private categoriaService:CategoriaService) {
    this.categorias=this.categoriaService.categorias;
  }
  ngOnInit() {}
  async verCategoria(categoria:Categoria){
    let extrasNavegacion: NavigationExtras = {
      state: {
        categoria: categoria,
      },
    };
    await this.router.navigate(['/']).then(() =>{this.router.navigate(["categoria"],extrasNavegacion)});
  }

  close():void{
    this.menuControler.close();
  }
}
