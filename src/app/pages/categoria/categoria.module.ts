import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaPageRoutingModule } from './categoria-routing.module';

import { CategoriaPage } from './categoria.page';
import {PipesModule} from '../../pipes/pipes.module';
import {ButtonListadoComponent} from '../../components/button-listado/button-listado.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CategoriaPageRoutingModule,
        PipesModule
    ],
  declarations: [CategoriaPage,ButtonListadoComponent]
})
export class CategoriaPageModule {}
