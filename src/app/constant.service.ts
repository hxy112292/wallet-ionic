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
  readonly ropstenEtherScanUrl: string = 'https://api-ropsten.etherscan.io';
  readonly ropstenEtherScanKey: string = 'UHRM7JQNHCSNCI97CQCC5I7V2ZKJXFHF4I';
  user: User;
  privateKeyList: PrivateKey[];
  privateKeyListLength: number;
  testBTCAddress: string;
  testETHAddress: string;

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

    this.testBTCAddress = '1NDyJtNTjmwk5xPNhjgAMu4HDHigtobu1s';
    this.testETHAddress = '0x58c2cb4a6BeE98C309215D0d2A38d7F8aa71211c';
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
