import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoEncargoPage } from './listado-encargo.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoEncargoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoEncargoPageRoutingModule {}
