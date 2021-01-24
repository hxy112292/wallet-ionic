import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {FCM} from '@ionic-native/fcm/ngx';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from './service/constant.service';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';
import {StorageService} from './service/storage.service';
import {AppUpdate} from '@ionic-native/app-update/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private http: HttpClient,
    private constant: ConstantService,
    private fcm: FCM,
    private localNotifications: LocalNotifications,
    private storage: StorageService,
    private appUpdate: AppUpdate
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      window.setTimeout( function() {
        this.splashscreen.hide();
      }, 3000);
      this.initFCM();
      this.getUserInfo();
      this.getPrivateKeyList();
      this.checkVersion();
    });
  }

  getUserInfo() {
    this.storage.get('token').then( token => {
      this.constant.user.token = token;
      this.storage.get('uid').then( value => {
        if ( value != null) {
          this.http.get(this.constant.walletToolBackendUrl + '/user/info', {
            params: {
              userId: value as any
            }
          }).subscribe(res => {
            this.constant.setUser((res as any).result);
            console.log(this.constant.getUser());
            this.getToken();
          });
        }
      });
    });
  }

  getPrivateKeyList() {

    this.storage.get('privateKeyList').then( res => {
      if (res == null) {
        this.constant.privateKeyList = [];
      } else {
        this.constant.privateKeyList = res as any;
      }
      console.log(JSON.stringify(this.constant.privateKeyList));
    });

    this.storage.get('privateKeyListLength').then( res => {
      if (res == null) {
        this.constant.privateKeyListLength = 0;
      } else {
        this.constant.privateKeyListLength = res as any;
      }
      console.log(this.constant.privateKeyListLength);
    });
  }

  initFCM() {
    this.fcm.onNotification().subscribe(data => {
      if (data.wasTapped) {
        console.log('Received in background');
      } else {
        console.log('Received in foreground');
        console.log(data);
        this.localNotifications.schedule({
          id: data.id,
          title: data.title,
          text: data.body,
          icon: 'res://ic_launcher.png'
        });
      }
    });

    this.fcm.onTokenRefresh().subscribe(token => {
      // Register your new token in your back-end if you want
      // backend.registerToken(token);
    });
  }

  subscribeToTopic() {
    this.fcm.subscribeToTopic('enappd');
  }
  getToken() {
    this.fcm.getToken().then(token => {
      // Register your new token in your back-end if you want
      // backend.registerToken(token);
      console.log(token);
      if (this.constant.getUser() != null && this.constant.getUser().id != null && this.constant.getUser().id !== '') {
        this.http.post(this.constant.walletToolBackendUrl + '/fcm/register', {
          userId: this.constant.getUser().id,
          fcmToken: token
        }).subscribe( res => {});
      }
    });
  }
  unsubscribeFromTopic() {
    this.fcm.unsubscribeFromTopic('enappd');
  }

  checkVersion() {
    const updateUrl = this.constant.walletToolBackendUrl + '/update/xml';
    this.appUpdate.checkAppUpdate(updateUrl).then(
        res => {
          console.log(res);
          if (res.code === 202) {
          }
        }).catch(
        err => {
          console.log(err);
        }
    );
  }
}
