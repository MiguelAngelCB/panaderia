import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoPageRoutingModule } from './producto-routing.module';

import { ProductoPage } from './producto.page';
import {ButtonListadoComponent} from '../../components/button-listado/button-listado.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ProductoPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProductoPage,ButtonListadoComponent]
})
export class ProductoPageModule {}
