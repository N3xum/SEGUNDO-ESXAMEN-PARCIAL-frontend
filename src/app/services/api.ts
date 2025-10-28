import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  // Obtener todas las categorías
  getCategorias(): Observable<any> {
    return this.http.get(`${this.apiUrl}/categorias`);
  }

  // Obtener todos los productos
  getProductos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/productos`);
  }

  // Obtener un producto específico
  getProducto(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/productos/${id}`);
  }


  // Empleados
getEmpleados(): Observable<any> {
  return this.http.get(`${this.apiUrl}/empleados`);
}

crearEmpleado(empleado: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/empleados`, empleado);
}
}