import { Injectable } from '@angular/core';
import {User} from './entity/user';
import {AlertController} from '@ionic/angular';
import {PrivateKey} from './entity/private-key';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  readonly baseUrl: string = 'https://www.hxyvip.club:7070';
  user: User;
  privateKeyList: PrivateKey[];
  privateKeyListLength: number;

  constructor(public alertController: AlertController) {
    this.user = {
      id: '',
      username: '',
      password: '',
      email: '',
      phone: '',
      role: ''
    };

    this.privateKeyList = [];
  }

  getUser() {
    return this.user;
  }

  setUser(user: User) {
    if (user == null) {
      this.user = {
        id: '',
        username: '',
        password: '',
        email: '',
        phone: '',
        role: ''
      };
    } else {
      this.user = user;
    }
  }

  async alert(text: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      // subHeader: subtitle,
      message: text,
      buttons: ['OK']
    });

    await alert.present();
  }
}
