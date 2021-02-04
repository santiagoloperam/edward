import { Injectable } from '@angular/core';
import { User } from '../interfaces/users';

const UserList = [
  {
    "id" : 1,
    "nombre" : "Carlos Perez",
    "direccion" : "cll3 #34-32",
    "telefono" : "333225566",
    "email" : "carlos@gmail.com"
  },
  {
    "id" : 2,
    "nombre" : "Manuel Ruiz",
    "direccion" : "cll44 #34-44",
    "telefono" : "44444444",
    "email" : "manuel@gmail.com"
  },
  {
    "id" : 3,
    "nombre" : "Juan Diaz",
    "direccion" : "cra22 #22-3",
    "telefono" : "55555555",
    "email" : "juan@gmail.com"
  }
]

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers() {
    return UserList;
  }

  getOneUser(_id) {
    return UserList.find(user => user.id);
  }

  addUser(user: User) {
    UserList.push(user);
  }

  editUser(newUserEdit) {
    const index = UserList.findIndex(user => user.id === newUserEdit.id);
    UserList[index] = newUserEdit;
  }

  deleteUser(_id) {
    UserList.splice(_id, 1);
  }
}
