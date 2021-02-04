import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/users';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  myId = 4;

  newUser : User = {
    "id" : this.myId,
    "nombre" : "",
    "direccion" : "",
    "telefono" : "",
    "email" : "",
  };

  constructor( private usersService: UsersService) { }

  ngOnInit(): void {
  }

  addUser() {
    console.log('will sen data', this.newUser);
    this.usersService.addUser(this.newUser);
    this.myId++;
    this.newUser = {
      "id" : 0,
      "nombre" : "",
      "direccion" : "",
      "telefono" : "",
      "email" : "",
    };
  }

}
