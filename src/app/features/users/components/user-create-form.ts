import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { User } from '../models/user.model';
import { UserService } from '../../../services/user-service';
import Swal from 'sweetalert2';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-create-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
  ],
  templateUrl: './user-create-form.html',
  styles: ``,
})
export class UserCreateForm implements OnInit {
  public formUserGroup: FormGroup;
  user: User = new User();
  title: string = 'Agregar'

  constructor(private formDialogUser: MatDialogRef<UserCreateForm>,
    private formBuilder: FormBuilder,
    private userServie: UserService, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.formUserGroup = this.formBuilder.group({
      username: [data != null ? data.userName : 'test', Validators.required],
      firstName: [data != null ? data.firstName : 'Test', Validators.required],
      lastName: [data != null ? data.lastName : 'Tes', Validators.required],
      email: [data != null ? data.email : 'test@gmail.com', Validators.required],
      phoneNumber: [data != null ? data.phoneNumber : '50233124569', Validators.required],
      password: [data != null ? data.password : 'Inicio.2026', Validators.required],
    })
    if (data != null) {
      this.title = 'Editar'
      this.user.id = data.id;
    }
  }
  ngOnInit(): void {

  }

  onSave() {

    this.user.firstname = this.formUserGroup?.get('firstName')?.value;
    this.user.lastname = this.formUserGroup?.get('lastName')?.value;
    this.user.username = this.formUserGroup?.get('username')?.value;
    this.user.email = this.formUserGroup?.get('email')?.value;
    this.user.phoneNumber = this.formUserGroup?.get('phoneNumber')?.value;
    if (this.title === 'Agregar') {
      this.user.password = this.formUserGroup?.get('password')?.value;
      this.userServie.userCreate(this.user).subscribe((response: any) => {
        if (response.success) {
          Swal.fire({
            icon: 'success',
            title: 'Users',
            text: response.message,
            footer: 'Kalum App v1.0.0'
          }).then(handlerResult => {
            if (handlerResult.isConfirmed) {
              this.formDialogUser.close(0);
            }
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Users',
            text: response.message,
            footer: 'Kalum App v1.0.0'
          }).then(handlerResult => {
            if (handlerResult.isConfirmed) {
              this.formDialogUser.close(2);
            }
          });
        }
      });
    } else {
      this.userServie.userUpdate(this.user).subscribe((response: any) => {
        Swal.fire({
            icon: 'success',
            title: 'Users',
            text: 'Datos actualizados!!!',
            footer: 'Kalum App v1.0.0'
          }).then(handlerResult => {
            if (handlerResult.isConfirmed) {
              this.formDialogUser.close(0);
            }
          });
      });
    }
  }

  onCancel() {
    this.formDialogUser.close(1);
  }


}
