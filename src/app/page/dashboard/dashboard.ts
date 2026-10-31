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
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';

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

  constructor(private technicalCareersService: TechnicalCareerService, private authService: AuthService, private router: Router) {

  }

  async ngOnInit(): Promise<void> {
    try {
      this.technicalCareersService.getTechnicalCareers().subscribe((response) => {
        console.log(response);
        this.careers = response.data;
      });
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

   async shareCareer(career: any): Promise<void> {
    const shareData = {
      title: career.name,
      text: `${career.name} - ${career.subTitle ?? ''}`,
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
      }
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        console.error('No fue posible compartir la carrera:', error);
      }
    }
  }

  assignCareer(career: any): void {
    if(!this.authService.isAuthenticated()) {
      Swal.fire({
        icon: 'warning',
        title: 'Asignación del curso',
        text: "Vemos que no has iniciado sesión o no tienes una cuenta creada, agradecemos que puedas iniciar o crear tu cuenta en la siguiente ventana",
        footer: '<a href="#">Kalum v1.0.0</a>'
      }).then(response => {
        this.router.navigate(['/login/guest'])
      });
    }
    console.log('Carrera seleccionada:', career);
  }

}



