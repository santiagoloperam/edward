import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/users';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  @Output() sendPosition = new EventEmitter();

  myUsers : User[];

  constructor( private usersService: UsersService ) { }

  ngOnInit(): void {
    this.myUsers = this.usersService.getUsers();
    console.log(this.myUsers);
  }

  getPositions(_id) {
    this.sendPosition.emit(_id);
  }

  deleteUser(_id) {
    this.usersService.deleteUser(_id);
  }

}
