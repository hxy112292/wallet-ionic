import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {FCM} from '@ionic-native/fcm/ngx';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from './constant.service';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  uid: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private http: HttpClient,
    private constant: ConstantService,
    private fcm: FCM,
    private localNotifications: LocalNotifications
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
    });
  }

  getUserInfo() {
    this.uid = localStorage.getItem('uid');
    if (this.uid != null) {
      this.http.get(this.constant.baseUrl + '/user/info', {
        params: {
          userId: this.uid
        }
      }).subscribe(res => {
        this.constant.setUser((res as any).result);
        this.getToken();
      });
    }
  }

  getPrivateKeyList() {
    if (JSON.parse(localStorage.getItem('privateKeyList')) == null) {
      this.constant.privateKeyList = [];
    } else {
      this.constant.privateKeyList = JSON.parse(localStorage.getItem('privateKeyList'));
    }
    if (localStorage.getItem('privateKeyListLength') == null || localStorage.getItem('privateKeyListLength') === '') {
      this.constant.privateKeyListLength = 0;
    } else {
      this.constant.privateKeyListLength = Number(localStorage.getItem('privateKeyListLength'));
    }

    console.log(JSON.stringify(this.constant.privateKeyList));
    console.log(this.constant.privateKeyListLength);

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
        this.http.post(this.constant.baseUrl + '/fcm/register', {
          userId: this.constant.getUser().id,
          fcmToken: token
        }).subscribe( res => {});
      }
    });
  }
  unsubscribeFromTopic() {
    this.fcm.unsubscribeFromTopic('enappd');
  }
}
