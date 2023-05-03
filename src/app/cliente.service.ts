import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //Esta URL obtiene el listado de todos los clientes en el backend
  private baseURL = "http://localhost:8080/api/clientes";
  //Esta URL crea los clientes
  private baseURL_CREAR = "http://localhost:8080/api/clientes/crear"
  //Esta URL actualiza los clientes
  private baseURL_ACTUALIZAR = "http://localhost:8080/api/clientes/actualizar"
  //Esta URL elimina los clientes
  private baseURL_ELIMINAR = "http://localhost:8080/api/clientes/eliminar"

  constructor(private httpClient:HttpClient) { }

  //Este metodo obtiene los clientes
  obtenerClientes():Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.baseURL}`);
  }
  //Este metodo nos registra los clientes
  registrarCliente(cliente:Cliente): Observable<Object>{
    return this.httpClient.post(`${this.baseURL_CREAR}`,cliente);
  }
  //Este metodo nos actualizara los clientes por id
  actualizarCliente(id:number,cliente:Cliente) : Observable<object>{
    return this.httpClient.put(`${this.baseURL_ACTUALIZAR}/${id}`,cliente);
  }
  //Este metodo nos eliminara los clientes por id
  eliminarCliente(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL_ELIMINAR}/${id}`)
  }
  //Este metodo nos obtendra los clientes por id
  obtenerClientesPorId(id:number) : Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.baseURL}/${id}`)
  }

}
