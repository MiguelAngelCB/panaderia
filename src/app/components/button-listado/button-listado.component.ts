import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ListadoEncargoService} from '../../shared/listado-encargo.service';

@Component({
  selector: 'app-button-listado',
  templateUrl: './button-listado.component.html',
  styleUrls: ['./button-listado.component.scss'],
})
export class ButtonListadoComponent implements OnInit {

  constructor(private router:Router,private listado:ListadoEncargoService) {
  }

  ngOnInit() {}

  verCarrito(){
    if(this.listado.getProductNumber()!=0){
      this.router.navigate(['listado-encargo']);
    }
  }
}
