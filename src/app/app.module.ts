import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { FormsModule } from '@angular/forms';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
import { ListaCuentaComponent } from './lista-cuenta/lista-cuenta.component';
import { ListaMovimientoComponent } from './lista-movimiento/lista-movimiento.component';
import { RegistrarCuentaComponent } from './registrar-cuenta/registrar-cuenta.component';
import { RegistrarMovimientoComponent } from './registrar-movimiento/registrar-movimiento.component';
import { ActualizarCuentaComponent } from './actualizar-cuenta/actualizar-cuenta.component';
import { ActualizarMovimientoComponent } from './actualizar-movimiento/actualizar-movimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaClienteComponent,
    RegistrarClienteComponent,
    ActualizarClienteComponent,
    ListaCuentaComponent,
    ListaMovimientoComponent,
    RegistrarCuentaComponent,
    RegistrarMovimientoComponent,
    ActualizarCuentaComponent,
    ActualizarMovimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
