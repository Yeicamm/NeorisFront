import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {
  id: number;
  cliente: Cliente = new Cliente();

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clienteService.obtenerClientesPorId(this.id).subscribe({
      next: (dato) => {
        console.log(dato);
        this.cliente = dato;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  
  actualizarCliente() {
    this.clienteService.actualizarCliente(this.id, this.cliente).subscribe({
      next: (dato) => {
        console.log(dato);
        this.irAlCliente();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  irAlCliente(){
    this.router.navigate(['/clientes']);
  }
  
  onSubmit(){
    this.actualizarCliente();
  }

}


