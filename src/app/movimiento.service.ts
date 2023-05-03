import { Injectable } from '@angular/core';
import { Movimiento } from './movimiento';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  //Esta URL obtiene el listado de todos los movimientos en el backend
  private baseURL = "http://localhost:8080/api/movimientos";
  //Esta URL crea los movimientos
  private baseURL_CREAR = "http://localhost:8080/api/movimientos/crear"
  //Esta URL actualiza los movimientos
  private baseURL_ACTUALIZAR = "http://localhost:8080/api/movimientos/actualizar"
  //Esta URL elimina los movimientos
  private baseURL_ELIMINAR = "http://localhost:8080/api/movimientos/eliminar"

  constructor(private httpClient:HttpClient) { }

  //Este metodo obtiene los movimientos
  obtenerMovimiento():Observable<Movimiento[]>{
    return this.httpClient.get<Movimiento[]>(`${this.baseURL}`);
  }
  //Este metodo nos registra los movimientos
  registrarMovimiento(movimiento:Movimiento): Observable<Object>{
    return this.httpClient.post(`${this.baseURL_CREAR}`,movimiento);
  }
  //Este metodo nos actualizara los movimientos por id
  actualizarMovimiento(id:number,movimiento:Movimiento) : Observable<object>{
    return this.httpClient.put(`${this.baseURL_ACTUALIZAR}/${id}`,movimiento);
  }
  //Este metodo nos eliminara los movimientos por id
  eliminarMovimiento(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL_ELIMINAR}/${id}`)
  }
  //Este metodo nos obtendra los movimientos por id
  obtenerMovimientoPorId(id:number) : Observable<Movimiento>{
    return this.httpClient.get<Movimiento>(`${this.baseURL}/${id}`)
  }
}
