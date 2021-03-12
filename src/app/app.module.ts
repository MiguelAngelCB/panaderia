import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import {FormService} from './core/service/form.service';
import {PipesModule} from './pipes/pipes.module';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {ProductoService} from './shared/producto.service';
import {ListadoEncargoService} from './shared/listado-encargo.service';
import { NetworkInterface } from '@ionic-native/network-interface';
import { NetworkInterfaceMock } from './mocks';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,PipesModule,AngularFireModule.initializeApp(environment.firebase)],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, FormService,ProductoService,ListadoEncargoService,{provide: NetworkInterface, useClass: NetworkInterfaceMock}],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule {}
