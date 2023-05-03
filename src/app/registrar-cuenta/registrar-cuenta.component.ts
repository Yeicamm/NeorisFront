import { Component, OnInit } from '@angular/core';
import { Cuenta } from '../cuenta';
import { CuentaService } from '../cuenta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-cuenta',
  templateUrl: './registrar-cuenta.component.html',
  styleUrls: ['./registrar-cuenta.component.css']
})
export class RegistrarCuentaComponent implements OnInit{

  cuenta : Cuenta = new Cuenta();
  constructor(private cuentaServicio:CuentaService, private router:Router){}

  ngOnInit(): void {
  }

  guardarCuenta() {
    this.cuentaServicio.registrarCuenta(this.cuenta).subscribe({
      next: (dato) => {
        console.log(dato);
        this.irAlCuenta();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  irAlCuenta(){
    this.router.navigate(['/cuentas'])
  }

  onSubmit(){
    this.guardarCuenta();
  }
}
