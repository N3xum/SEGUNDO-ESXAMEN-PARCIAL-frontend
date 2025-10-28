import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-empleados',
  imports: [CommonModule, FormsModule],
  templateUrl: './empleados.html',
  styleUrl: './empleados.scss'
})
export class Empleados implements OnInit {
  empleados: any[] = [];
  nuevoEmpleado = {
    nombre: '',
    apellido: '',
    correo: '',
    salario: 0
  };
  mensaje: string = '';
  error: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  cargarEmpleados() {
    this.apiService.getEmpleados().subscribe({
      next: (data) => {
        this.empleados = data;
      },
      error: (err) => console.error('Error:', err)
    });
  }

  agregarEmpleado() {
    this.mensaje = '';
    this.error = '';

    if (!this.nuevoEmpleado.nombre || !this.nuevoEmpleado.correo || !this.nuevoEmpleado.salario) {
      this.error = 'Completa todos los campos obligatorios';
      return;
    }

    this.apiService.crearEmpleado(this.nuevoEmpleado).subscribe({
      next: (data) => {
        this.mensaje = 'Empleado agregado exitosamente';
        this.empleados.push(data);
        // Limpiar formulario
        this.nuevoEmpleado = { nombre: '', apellido: '', correo: '', salario: 0 };
      },
      error: (err) => {
        this.error = 'Error al agregar empleado';
        console.error(err);
      }
    });
  }
}