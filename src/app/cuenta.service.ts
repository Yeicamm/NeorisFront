import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuenta } from './cuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  //Esta URL obtiene el listado de todos las cuentas en el backend
  private baseURL = "http://localhost:8080/api/cuentas";
  //Esta URL crea las cuentas
  private baseURL_CREAR = "http://localhost:8080/api/cuentas/crear"
  //Esta URL actualiza las cuentas
  private baseURL_ACTUALIZAR = "http://localhost:8080/api/cuentas/actualizar"
  //Esta URL elimina las cuentas
  private baseURL_ELIMINAR = "http://localhost:8080/api/cuentas/eliminar"

  constructor(private httpClient:HttpClient) { }

  //Este metodo obtiene las cuentas
  obtenerCuenta():Observable<Cuenta[]>{
    return this.httpClient.get<Cuenta[]>(`${this.baseURL}`);
  }
  //Este metodo nos registra las cuentas
  registrarCuenta(cuenta:Cuenta): Observable<Object>{
    return this.httpClient.post(`${this.baseURL_CREAR}`,cuenta);
  }
  //Este metodo nos actualizara las cuentas por id
  actualizarCuenta(id:number,cuenta:Cuenta) : Observable<object>{
    return this.httpClient.put(`${this.baseURL_ACTUALIZAR}/${id}`,cuenta);
  }
  //Este metodo nos eliminara las cuentas por id
  eliminarCuenta(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL_ELIMINAR}/${id}`)
  }
  //Este metodo nos obtendra las cuentas por id
  obtenerCuentaPorId(id:number) : Observable<Cuenta>{
    return this.httpClient.get<Cuenta>(`${this.baseURL}/${id}`)
  }

}
