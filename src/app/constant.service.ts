import { Injectable } from '@angular/core';
import {User} from './entity/user';
import {AlertController} from '@ionic/angular';
import {PrivateKey} from './entity/private-key';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  readonly baseUrl: string = 'https://www.hxyvip.club:7070';
  readonly blockChairUrl: string = 'https://api.blockchair.com';
  user: User;
  privateKeyList: PrivateKey[];
  privateKeyListLength: number;
  testAddress: string;

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

    this.testAddress = '1NDyJtNTjmwk5xPNhjgAMu4HDHigtobu1s';
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
      header: '提醒',
      // subHeader: subtitle,
      message: text,
      buttons: ['确定']
    });

    await alert.present();
  }
}
