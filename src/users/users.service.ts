import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { USERS } from '../mocks/users.mock';

@Injectable()
export class UsersService {
  users = USERS;
  getUsers(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.users);
    });
  }
  getUserByID(id): Promise<any> {
    return new Promise(resolve => {
      const user = this.users.filter(u => u.id === id);
      if (user.length) {
        resolve(user[0]);
      } else {
        throw new HttpException('Not found', HttpStatus.NOT_FOUND);
      }
    });
  }
  createUser(user): Promise<any> {
    return new Promise(resolve => {
      this.users.push(user);
      resolve(this.users);
    });
  }
  editUser(id, user): Promise<any> {
    return new Promise(resolve => {
      const editedUser = user;
      editedUser.id = id;
      const updatedUsers = this.users.map(u => { if (u.id === id) { return editedUser; } return u; });
      this.users = updatedUsers;
      resolve(editedUser);
    });
  }
  deleteUser(id): Promise<any> {
    return new Promise(resolve => {
      this.users = this.users.filter(u => u.id !== id);
      resolve(this.users);
    });
  }
}
