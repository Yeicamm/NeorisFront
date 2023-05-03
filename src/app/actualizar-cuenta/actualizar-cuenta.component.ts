import { Component } from '@angular/core';
import { Cuenta } from '../cuenta';
import { CuentaService } from '../cuenta.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-cuenta',
  templateUrl: './actualizar-cuenta.component.html',
  styleUrls: ['./actualizar-cuenta.component.css']
})
export class ActualizarCuentaComponent {

  id: number;
  cuentas: Cuenta = new Cuenta();

  constructor(
    private cuentaService: CuentaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cuentaService.obtenerCuentaPorId(this.id).subscribe({
      next: (dato) => {
        console.log(dato);
        this.cuentas = dato;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  
  actualizarCuenta() {
    this.cuentaService.actualizarCuenta(this.id, this.cuentas).subscribe({
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
    this.router.navigate(['/cuentas']);
  }
  
  onSubmit(){
    this.actualizarCuenta();
  }

}
