import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {PipesModule} from '../pipes/pipes.module';
import {ButtonListadoComponent} from '../components/button-listado/button-listado.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    PipesModule,
  ],
  exports: [
    ButtonListadoComponent
  ],
  declarations: [HomePage, ButtonListadoComponent]
})
export class HomePageModule {}
