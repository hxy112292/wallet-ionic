import { Injectable } from '@angular/core';
import {User} from '../entity/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  constructor() {
    this.user = {
      id: '',
      username: '',
      password: '',
      email: '',
      phone: '',
      role: [],
      token: '',
    };
  }

  setUser(user: User) {
    if (user == null) {
      this.user = {
        id: '',
        username: '',
        password: '',
        email: '',
        phone: '',
        role: [],
        token: ''
      };
    } else {
      this.user = user;
    }
  }
}
