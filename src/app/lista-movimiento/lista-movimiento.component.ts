import { Component } from '@angular/core';
import { Movimiento } from '../movimiento';
import { MovimientoService } from '../movimiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-movimiento',
  templateUrl: './lista-movimiento.component.html',
  styleUrls: ['./lista-movimiento.component.css']
})
export class ListaMovimientoComponent {
  editarMovimientoId: number;
  movimientos:Movimiento[];
  
  constructor(private movimientoServicio:MovimientoService, private router:Router){
    
  }
  ngOnInit(): void {
    this.obtenerMovimiento();
  }
  actualizarMovimiento(id: number){
    this.editarMovimientoId = id;
    this.router.navigate(['/actualizar-movimiento', id]);
  }
  
  eliminarMovimiento(id:number){
    this.movimientoServicio.eliminarMovimiento(id).subscribe(dato => {
      console.log(dato);
      this.obtenerMovimiento();
    });
  }

  private obtenerMovimiento(){
    this.movimientoServicio.obtenerMovimiento().subscribe(dato => {
      this.movimientos = dato;
    });
  }


}
