import { Injectable } from '@angular/core';
import { TechnicalCareer } from '../auth/model/technical-career.model';

@Injectable({
  providedIn: 'root',
})
export class TechnicalCareerService {
  getTechnicalCareers(): Promise<TechnicalCareer[]> {
    return new Promise((resolve,reject) => {

      setTimeout(() => {
        //reject('Hubo un error en el sistema al momento de consultar las carreras ténicas');
        resolve([
          {
            careerId: '1',
            name: 'Desarrollo de aplicaciones empresariales con .NET Core',
            image: 'images/tics.jpg',
            description: 'Curso de desarrollo de software orientado a la arquitectura <span class="text-color-kalum"> DOTNET Core </span> para desarrollos empresariales',
            subTitle: 'Tecnologico Kalum'
          },
          {
            careerId: '2',
            name: 'Desarrollo de aplicciones moviles con Android',
            image: 'images/tics.jpg',
            description: 'Curso de desarrollo de software orientado a  <span class="text-color-kalum"> Aplicaciones móviles </span> con Android para desarrollos empresariales',
            subTitle: 'Tecnologico Kalum'

          },
          {
            careerId: '3',
            name: 'Desarrollo de aplicaciones web con React',
            image: 'images/tics.jpg',
            description: 'Curso de desarrollo de software orientado a la arquitectura <span class="text-color-kalum"> DOTNET Core </span> para desarrollos empresariales',
            subTitle: 'Tecnologico Kalum'
          },
          {
            careerId: '4',
            name: 'Desarrollo de aplicciones Web con Php',
            image: 'images/tics.jpg',
            description: 'Curso de desarrollo de software orientado a la arquitectura <span class="text-color-kalum"> DOTNET Core </span> para desarrollos empresariales',
            subTitle: 'Tecnologico Kalum'
          }
        ]);
      }, 2000);
    });
  }
}
