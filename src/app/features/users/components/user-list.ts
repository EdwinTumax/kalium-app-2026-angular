import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { UserService } from '../../../services/user-service';
import { User } from '../models/user.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UserCreateForm } from './user-create-form';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-list',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  templateUrl: './user-list.html',
  styles: ``,
})
export class UserList implements OnInit {

  displayColumns: string[] = ['Apellidos', 'Nombres', 'Username', 'Email', 'Telefono', 'Roles', 'Acciones'];
  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator

  ngOnInit(): void {
    this.getUsers();
  }

  constructor(private userService: UserService, private dialogForm: MatDialog) {

  }

  getUsers() {
    this.userService.getUsers().subscribe(response => {
      this.getUserData(response.data);
    })
  }

  getUserData(data: any) {
    const dataUsers: User[] = [];
    let userList = data;
    userList.forEach((element: User) => {
      dataUsers.push(element);
    });
    this.dataSource = new MatTableDataSource<User>(dataUsers);
    this.dataSource.paginator = this.paginator;
  }

  openFormCreateUser() {
    const dialogFormRef = this.dialogForm.open(UserCreateForm, { width: '450px' })
      .afterClosed()
      .subscribe(formResponse => {
        if (formResponse == 0) {
          this.getUsers();
        }
      });
  }

  openFormEdirUser(user: User) {
    this.dialogForm.open(UserCreateForm, { width: '450px', data: user })
      .afterClosed().subscribe(formResponse => {
        if (formResponse == 0) {
          this.getUsers();
        }
      });
  }

  deleteUser(id: string) {
    Swal.fire({
      title: "Esta seguro de eliminar el registro?",
      text: "Estos cambios no pueden revertirse",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.userDelete(id).subscribe((response: any) => {
          Swal.fire({
            title: "Eliminado!",
            text: "El registro fue eliminado",
            icon: "success"
          }).then(result => {
            if(result.isConfirmed) {
              this.getUsers();
            }
          });
        })
      }
    });
  }


}


