import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user-service';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styles: ``,
})
export class UserList implements OnInit {

  ngOnInit(): void {
    this.getUsers();
  }

  constructor(private userService: UserService) {

  }

  getUsers() {
    this.userService.getUsers().subscribe(response => {
      console.log(response);
    })
  }

}
