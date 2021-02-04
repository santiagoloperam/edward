import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/users';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {  

  myUser
  userFound

  constructor( private usersService: UsersService ) { }

  ngOnInit(): void {
  }

  getPositions( $event ) {
    this.myUser = this.usersService.getOneUser($event);
    this.userFound = this.myUser;
  }

  editUser() {
    this.usersService.editUser(this.userFound);
  }

}
