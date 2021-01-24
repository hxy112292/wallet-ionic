import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../service/constant.service';
import {Router} from '@angular/router';
import {FCM} from '@ionic-native/fcm/ngx';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';
import {StorageService} from '../../service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private fcm: FCM,
              private localNotifications: LocalNotifications,
              private router: Router,
              private storage: StorageService) { }

  ngOnInit() {
  }

  login() {
    if (this.username == null || this.username === '') {
      this.constant.alert('用户名为空');
      return;
    }
    if (this.password == null || this.password === '') {
      this.constant.alert('密码为空');
      return;
    }
    this.http.post(this.constant.walletToolBackendUrl + '/auth/login', {
      username: this.username,
      password: this.password,
    }).subscribe(res => {
      if ((res as any).code !== 0) {
        this.constant.alert((res as any).message);
        return;
      }
      this.constant.setUser((res as any).result);
      this.storage.set('uid', this.constant.getUser().id);
      this.storage.set('token', this.constant.getUser().token);
      this.getToken();
      this.router.navigate(['/tabs/me']);
    });
  }

  jumpToRegister() {
    this.router.navigate(['register']);
  }

  getToken() {

    this.fcm.getToken().then(token => {
      // Register your new token in your back-end if you want
      // backend.registerToken(token);
      console.log(token);
      if (this.constant.getUser() != null && this.constant.getUser().id != null && this.constant.getUser().id !== '') {
        this.http.post(this.constant.walletToolBackendUrl + '/fcm', {
          userId: this.constant.getUser().id,
          fcmToken: token
        }).subscribe( res => {});
      }
    });
  }

  toForgetPassword() {
    this.router.navigate(['login-forget-password']);
  }

}
