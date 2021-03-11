import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../core/model/Producto';
import {FormService} from '../../core/service/form.service';
import {MyFormGroup} from '../../core/model/validators/MyFormGroup';
import {ListadoEncargoService} from '../../shared/listado-encargo.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  public producto:Producto;
  public cantidad:number=1;
  public formCantidad:MyFormGroup;

  constructor(public router: Router, private rutaActivada: ActivatedRoute,public formService:FormService,private listadoService:ListadoEncargoService) {
    this.rutaActivada.queryParams.subscribe(()=> {
      this.producto = this.router.getCurrentNavigation().extras.state.producto;
    });
    this.formCantidad=this.formService.gerFormGroup();
  }

  minus(){
    if (this.cantidad>1) {
      this.cantidad--;
    }
  }

  plus(){
    this.cantidad++;
  }

  addNumber($event):boolean{
    let min:number=48;
    let max:number=57;
    return $event.charCode >= min && $event.charCode <= max;
  }

  ngOnInit() {
  }

}
