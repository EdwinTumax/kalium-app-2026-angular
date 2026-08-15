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
      valorDos: [0, Validators.required],
      valorTres: [0, Validators.required],
    });
  }


  onSubmit() {

    function sumar(a:number,b:number) {
      return a + b;
    }

    const sumarVersion = (a:number, b:number): number => {
      return a + b;
    }

    if (this.formulario.valid) {
      let valorUno = Number(this.formulario.get('valorUno')?.value);
      let valorDos = Number(this.formulario.get('valorDos')?.value);
      let valorTres = Number(this.formulario.get('valorTres')?.value);
      
      
      for(let i = valorUno; i <= valorDos; i+=valorTres) {
        console.log(i);
      }

      let contador = valorUno;
      while(contador <= valorDos) {
        console.log(contador);
        contador += valorTres;
      }

      const lenguajes = [".NET","JAVA","PHP","PYTHON"]

      for(const l of lenguajes) {
        console.log(l);
      }

      lenguajes.forEach( l => {
        console.log(l);
      });

      let resultado = sumar(valorUno,valorDos);
      Swal.fire(`El resultado es ${resultado}`);

      Swal.fire(`El resultado del arrow Function es ${sumarVersion(valorUno,valorDos)}`);

    } 

  }

}



