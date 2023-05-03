import { Component, OnInit } from '@angular/core';
import { Cuenta } from '../cuenta';
import { CuentaService } from '../cuenta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-cuenta',
  templateUrl: './lista-cuenta.component.html',
  styleUrls: ['./lista-cuenta.component.css']
})
export class ListaCuentaComponent implements OnInit {
  editarCuentaId: number;
  cuentas:Cuenta[];
  
  constructor(private cuentaServicio:CuentaService, private router:Router){
    
  }
  ngOnInit(): void {
    this.obtenerCuentas();
  }
  actualizarCuenta(id: number){
    this.editarCuentaId = id;
    this.router.navigate(['/actualizar-cuenta', id]);
  }
  
  eliminarCuenta(id:number){
    this.cuentaServicio.eliminarCuenta(id).subscribe(dato => {
      console.log(dato);
      this.obtenerCuentas();
    });
  }

  private obtenerCuentas(){
    this.cuentaServicio.obtenerCuenta().subscribe(dato => {
      this.cuentas = dato;
    });
  }

}
