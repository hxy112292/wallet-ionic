import { Injectable } from '@angular/core';
import {User} from './entity/user';
import {AlertController} from '@ionic/angular';
import {PrivateKey} from './entity/private-key';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  readonly baseUrl: string = 'https://www.jyfen.club:7070';
  readonly githubUrl: string = 'https://github.com/hxy112292/wallet-ionic';
  readonly litecoreTestnetUrl: string = 'https://testnet.litecore.io';
  user: User;
  privateKeyList: PrivateKey[];
  privateKeyListLength: number;
  testBTCAddress: string;
  testETHAddress: string;

  constructor(public alertController: AlertController,
              public loadingController: LoadingController) {
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

  showLoader() {
    this.loadingController.create({
      message: 'Loading...',
      backdropDismiss: true
    }).then((res) => {
      res.present();
    });
  }

  hideLoader() {
    this.loadingController.dismiss().then((res) => {
      console.log('Loading dismissed!', res);
    }).catch((error) => {
      console.log('error', error);
    });
  }
}
