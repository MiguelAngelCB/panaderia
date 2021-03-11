import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoEncargoPageRoutingModule } from './listado-encargo-routing.module';

import { ListadoEncargoPage } from './listado-encargo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoEncargoPageRoutingModule
  ],
  declarations: [ListadoEncargoPage]
})
export class ListadoEncargoPageModule {}
