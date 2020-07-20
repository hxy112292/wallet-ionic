import { Injectable } from '@angular/core';
import {User} from './entity/user';
import {AlertController} from '@ionic/angular';
import {PrivateKey} from './entity/private-key';
import { LoadingController } from '@ionic/angular';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  readonly baseUrl: string = 'https://www.hd-wallet.com:7070';
  readonly webUrl: string = 'https://www.hd-wallet.com';
  readonly githubUrl: string = 'https://github.com/hxy112292/wallet-ionic';
  readonly litecoreTestnetUrl: string = 'https://testnet.litecore.io';
  user: User;
  privateKeyList: PrivateKey[];
  privateKeyListLength: number;
  options: InAppBrowserOptions;

  constructor(public alertController: AlertController,
              public loadingController: LoadingController,
              public inAppBrowser: InAppBrowser) {
    this.user = {
      id: '',
      username: '',
      password: '',
      email: '',
      phone: '',
      role: ''
    };

    this.options = {
      location : 'yes',
      hideurlbar: 'yes',
      hidden : 'no',
      clearcache : 'yes',
      clearsessioncache : 'yes',
      zoom : 'yes',
      hardwareback : 'yes',
      mediaPlaybackRequiresUserAction : 'no',
      shouldPauseOnSuspend : 'no',
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

  openBrowser(webUrl) {
    const url = webUrl;
    const target = '_self';
    this.inAppBrowser.create(url, target, this.options);
  }
}
