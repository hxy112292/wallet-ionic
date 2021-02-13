import { Injectable } from '@angular/core';
import {User} from '../entity/user';
import {ConstantService} from './constant.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  constructor(private constant: ConstantService) {
    this.user = {
      birthday: '', description: '', sex: '',
      vipTime: '',
      id: '',
      username: '',
      password: '',
      email: '',
      phone: '',
      role: [constant.ROLE_USER],
      token: ''
    };
  }

  setUser(user: User) {
    if (user == null) {
      this.user = {
        birthday: '', description: '', sex: '',
        vipTime: '',
        id: '',
        username: '',
        password: '',
        email: '',
        phone: '',
        role: [this.constant.ROLE_USER],
        token: ''
      };
    } else {
      this.user = user;
    }
  }
}
