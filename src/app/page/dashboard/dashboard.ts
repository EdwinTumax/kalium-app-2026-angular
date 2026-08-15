import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})


export class Dashboard {

  formulario!: FormGroup;

  tituloPrincipal = 'KALUM APP';

  constructor(private formBuidler: FormBuilder) {
    this.formulario = this.formBuidler.group({
      valorUno: [0, Validators.required],
      valorDos: [0, Validators.required]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      let valorUno = this.formulario.get('valorUno')?.value;
      let valorDos = this.formulario.get('valorDos')?.value;
      if (Number(valorUno) > Number(valorDos)) {
        Swal.fire({
          title: "Operadores Condicionales",
          text: `El valor ${valorUno} es mayor`,
          icon: "info"
        });
      } else {
        Swal.fire({
          title: "Operadores Condicionales",
          text: `El valor ${valorDos} es mayor `,
          icon: "info"
        });
      }
    }
  }

}



