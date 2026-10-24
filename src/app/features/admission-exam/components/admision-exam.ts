import { CommonModule, DatePipe } from '@angular/common';
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
import { AdmissionExamenService } from '../../../services/admission-examen-service';
import { AuthService } from '../../../services/auth-service';

@Component({
  selector: 'app-admision-exam',
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
    MatDialogModule,
    DatePipe
  ],
  templateUrl: './admision-exam.html',
  styles: ``,
})
export class AdmisionExam implements OnInit {
  displayColumns: string[] = ['No', 'FechaExamen','Acciones'];
  dataSource = new MatTableDataSource<AdmisionExam>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator

  constructor(private admissionExamService: AdmissionExamenService, private dialogForm: MatDialog, public authService: AuthService) {

  }

  ngOnInit(): void {
    this.getAdmissionExam();
  }

  getAdmissionExam() {
    this.admissionExamService.getAdmissionExam().subscribe(admissionExams => {
      this.getAdmissionExamData(admissionExams.data);
    });
  }

  getAdmissionExamData(data: any) {
    const dataAdmissionExam: AdmisionExam[] = [];
    let admissionExamList = data;
    admissionExamList.forEach((element: AdmisionExam) => {
      dataAdmissionExam.push(element);
    });
    this.dataSource = new MatTableDataSource<AdmisionExam>(dataAdmissionExam);
    this.dataSource.paginator = this.paginator;
  }

  assignmentAdmisionExam(id: string): void {

  }

  openFormCreateAdmissionExam(): void {

  }

  openFormEditRole(admissionExam : AdmisionExam): void {

  }

  deleteRole(id: string): void {

  }

   applyFilter(event: Event) : void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if(this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  clearFilter(input: HTMLInputElement) : void {
    input.value = '';
    this.dataSource.filter = '';
    if(this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
