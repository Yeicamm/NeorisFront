import { Component } from '@angular/core';
import { Movimiento } from '../movimiento';
import { MovimientoService } from '../movimiento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-movimiento',
  templateUrl: './actualizar-movimiento.component.html',
  styleUrls: ['./actualizar-movimiento.component.css']
})
export class ActualizarMovimientoComponent {

  
  id: number;
  movimientos: Movimiento = new Movimiento();

  constructor(
    private movimientoService: MovimientoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.movimientoService.obtenerMovimientoPorId(this.id).subscribe({
      next: (dato) => {
        console.log(dato);
        this.movimientos = dato;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  
  actualizarMovimiento() {
    this.movimientoService.actualizarMovimiento(this.id, this.movimientos).subscribe({
      next: (dato) => {
        console.log(dato);
        this.irAlMovimiento();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  irAlMovimiento(){
    this.router.navigate(['/movimientos']);
  }
  
  onSubmit(){
    this.actualizarMovimiento();
  }

}
