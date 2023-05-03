import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit{
  cliente : Cliente = new Cliente();
  constructor(private clienteServicio:ClienteService, private router:Router){}

  ngOnInit(): void {
  }

  guardarCliente() {
    this.clienteServicio.registrarCliente(this.cliente).subscribe({
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
    this.router.navigate(['/clientes'])
  }

  onSubmit(){
    this.guardarCliente();
  }

}
