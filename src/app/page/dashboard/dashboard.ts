import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import Swal from 'sweetalert2';
import { TechnicalCareer } from '../../auth/model/technical-career.model';
import { TechnicalCareerService } from '../../services/technical-career-service';

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

export class Dashboard implements OnInit {
  careers: TechnicalCareer[] = [];

  constructor(private technicalCareersService: TechnicalCareerService) {

  }

  async ngOnInit(): Promise<void> {
    //Promise
    /*this.technicalCareersService.getTechnicalCareers().then((response) => {
      this.careers = response;
    }).catch(error => {
      Swal.fire({
        icon: "error",
        title: "Carreras Técnicas",
        text: error,
        footer: "<a href=\"#\">Why do I have this issue?</a>"
      })
    });*/

    // async & await
    try {
      this.careers = await this.technicalCareersService.getTechnicalCareers();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Carreras Técnicas",
        text: `${error}`,
        footer: "<a href=\"#\">Why do I have this issue?</a>"
      }
      );
    }
  }

}



