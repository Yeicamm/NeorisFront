import { Component } from '@angular/core';
import { Movimiento } from '../movimiento';
import { MovimientoService } from '../movimiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-movimiento',
  templateUrl: './registrar-movimiento.component.html',
  styleUrls: ['./registrar-movimiento.component.css']
})
export class RegistrarMovimientoComponent {
  movimiento: Movimiento = new Movimiento();
  constructor(private movimientoServicio: MovimientoService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarMovimiento() {
    this.movimientoServicio.registrarMovimiento(this.movimiento).subscribe({
      next: (dato) => {
        console.log(dato);
        this.irAlMovimiento();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  irAlMovimiento() {
    this.router.navigate(['/movimientos'])
  }

  onSubmit() {
    this.guardarMovimiento();
  }

}
