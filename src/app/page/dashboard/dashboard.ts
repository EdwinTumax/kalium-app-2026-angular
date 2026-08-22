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
import { UserService } from '../../services/user-service';
import { User } from '../../auth/model/user.model';
import { last } from 'rxjs';

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

  users: User[] = [];

  constructor(private formBuidler: FormBuilder, private userService: UserService) {
    this.formulario = this.formBuidler.group({
      valorUno: [0, Validators.required],
      valorDos: [0, Validators.required],
      valorTres: [0, Validators.required],
    });
  }


  onSubmit() {
    this.userService.getUsers().then((response) => {
      const usuarioNotificados: any[] = [];
      const promosiones = ['Inscripción gratis', 'Descuento del 20%', 'Primer mes gratis', 'Chumpa de promision', 'Parqueo gratis']

      response.map(user => {
        //Desestructuracion
        const { lastname, firstname, email, roles } = user;
        usuarioNotificados.push({ lastname, firstname, email, roles });
      });

      // Rest
      const [primera, segunda, ...resto] = promosiones

      usuarioNotificados.map((user) => {
        if (user.roles[0] === 'ROLE_STUDENT') {
          //Spread
          const mensaje = {
            ...user,
            resto
          }
          console.log('Enviando notificacion a:');
          console.log(JSON.stringify(mensaje));
        } else if (user.roles[0] === 'ROLE_TEACHER') {
          const mensaje = {
            ...user,
            primera,
            segunda
          }
          console.log('Enviando notificacion a:');
          console.log(JSON.stringify(mensaje));
        } else {
          console.log('Sin promocion');
        }
      });
    });
  }

}



