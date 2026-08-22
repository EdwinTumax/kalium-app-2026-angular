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
      this.users = response;
      this.users.map(user => {
        const { lastname, firstname, email } = user;
        console.log(`Enviando notificacion a ${lastname} ${firstname} al correo ${email}`);
      });
    }); 
  }

}



