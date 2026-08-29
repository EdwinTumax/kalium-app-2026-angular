import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Login } from '../model/login.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login-form.html',
  styles: ``,
})
export class LoginForm implements OnInit {
  loginForm!: FormGroup;
  login: Login = new Login();

  constructor(private formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.login.username = this.loginForm.get('username')?.value;
      this.login.password = this.loginForm.get('password')?.value;
      if(this.login.username === 'etumax' && this.login.password === 'Inicio.2026') {
        Swal.fire({
          title: 'Login',
          text: `Bienvenido al sistema ¡${this.login.username}!`,
          icon: 'success'
        }).then(result => {
          if(result.isConfirmed) {
            this.router.navigate(['/']);
          }
        });
      } else {
        Swal.fire({
          title: 'Login failed',
          text: `Username o Password incorrectos, revisar sus credenciales`,
          icon: 'error'
        })
      }
    }
  }

  onRegister() {
    this.router.navigate(['/register'])
  }

}
