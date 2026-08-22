import { Injectable } from '@angular/core';
import { User } from '../auth/model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsers(): Promise<User[]> {
    return new Promise((resolve) => {
      console.log("Emulando la consulta a una Api de Usuarios");
      setTimeout(() => {
        const users: User[] = [
          {
            lastname: 'Rodriguez',
            firstname: 'Mario',
            username: 'jrodriguez',
            password: 'Inicio.2026',
            email: 'jr@gmail.com',
            identityUser: '1',
            roles: ['ROLE_STUDENT']
          },
          {
            lastname: 'Martinez',
            firstname: 'Pedro',
            username: 'pmartinez',
            password: 'Inicio.2026',
            email: 'pmartinez@gmail.com',
            identityUser: '2',
            roles: ['ROLE_STUDENT']
          },
          {
            lastname: 'Fuentes',
            firstname: 'Maria',
            username: 'mfuentes',
            password: 'Inicio.2026',
            email: 'mfuentes@gmail.com',
            identityUser: '3',
            roles: ['ROLE_TEACHER']
          },
          {
            lastname: 'Tumax',
            firstname: 'Edwin',
            username: 'etumax',
            password: 'Inicio.2026',
            email: 'etumax@gmail.com',
            identityUser: '4',
            roles: ['ROLE_TEACHER']
          },
        ];
        resolve(users);
      }, 2000);
    });
  }
}
