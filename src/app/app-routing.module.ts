import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
import { ActualizarCuentaComponent } from './actualizar-cuenta/actualizar-cuenta.component';
import { ActualizarMovimientoComponent } from './actualizar-movimiento/actualizar-movimiento.component';
import { RegistrarMovimientoComponent } from './registrar-movimiento/registrar-movimiento.component';
import { RegistrarCuentaComponent } from './registrar-cuenta/registrar-cuenta.component';
import { ListaCuentaComponent } from './lista-cuenta/lista-cuenta.component';
import { ListaMovimientoComponent } from './lista-movimiento/lista-movimiento.component';

const routes: Routes = [
  {path : 'clientes',component:ListaClienteComponent},
  {path : 'cuentas',component:ListaCuentaComponent},
  {path : 'movimientos',component:ListaMovimientoComponent},
  {path:'',redirectTo:'clientes',pathMatch:'full'},
  {path: 'registrar-cliente',component : RegistrarClienteComponent},
  {path: 'registrar-cuenta',component : RegistrarCuentaComponent},
  {path: 'registrar-movimiento',component : RegistrarMovimientoComponent},
  {path : 'actualizar-cliente/:id',component : ActualizarClienteComponent},
  {path : 'actualizar-cuenta/:id',component : ActualizarCuentaComponent},
  {path : 'actualizar-movimiento/:id',component : ActualizarMovimientoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
