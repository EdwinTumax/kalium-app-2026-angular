import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Role } from '../models/role.model';
import { RoleService } from '../../../services/role-service';
import { RoleCreateForm } from './role-create-form';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-role-list',
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
  templateUrl: './role-list.html',
  styles: ``,
})
export class RoleList implements OnInit {

  displayColumns: string[] = ['Codigo', 'Nombre', 'Acciones'];
  dataSource = new MatTableDataSource<Role>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator

  constructor(private roleService: RoleService, private dialogForm: MatDialog) {

  }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() {
    this.roleService.getRoles().subscribe(roles => {
      console.log(roles.data)
      this.getRoleData(roles.data);
    });
  }

  getRoleData(data: any) {
    const dataRoles: Role[] = [];
    let userList = data;
    userList.forEach((element: Role) => {
      dataRoles.push(element);
    });
    this.dataSource = new MatTableDataSource<Role>(dataRoles);
    this.dataSource.paginator = this.paginator;
  }

  openFormCreateRole() {
    const dialogFormRef = this.dialogForm.open(RoleCreateForm, { width: '450px' })
      .afterClosed()
      .subscribe(formResponse => {
        if (formResponse == 0) {
          this.getRoles();
        }
      });
  }

  openFormEditRole(role: Role) {
    this.dialogForm.open(RoleCreateForm, { width: '450px', data: role })
      .afterClosed().subscribe(formResponse => {
        if (formResponse == 0) {
          this.getRoles();
        }
      });
  }


  deleteRole(id: string) {
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
        this.roleService.roleDelete(id).subscribe((response: any) => {
          Swal.fire({
            title: "Eliminado!",
            text: "El registro fue eliminado",
            icon: "success"
          }).then(result => {
            if (result.isConfirmed) {
              this.getRoles();
            }
          });
        })
      }
    });
  }


}
