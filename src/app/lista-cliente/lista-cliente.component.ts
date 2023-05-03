import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit{

  editarClienteId: number;
  clientes:Cliente[];
  
  constructor(private clienteServicio:ClienteService, private router:Router){
    
  }
  ngOnInit(): void {
    this.obtenerClientes();
  }
  actualizarCliente(id: number){
    this.editarClienteId = id;
    this.router.navigate(['/actualizar-cliente', id]);
  }
  
  eliminarCliente(id:number){
    this.clienteServicio.eliminarCliente(id).subscribe(dato => {
      console.log(dato);
      this.obtenerClientes();
    });
  }

  private obtenerClientes(){
    this.clienteServicio.obtenerClientes().subscribe(dato => {
      this.clientes = dato;
    });
  }
}
