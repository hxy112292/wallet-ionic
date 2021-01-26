import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../service/constant.service';
import {Router} from '@angular/router';
import {FCM} from '@ionic-native/fcm/ngx';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';
import {StorageService} from '../../service/storage.service';
import {UserService} from '../../service/user.service';
import {AlertService} from '../../service/alert.service';

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
              private userService: UserService,
              private alertService: AlertService,
              private router: Router,
              private storage: StorageService) { }

  ngOnInit() {
  }

  login() {
    if (this.username == null || this.username === '') {
      this.alertService.alert('用户名为空');
      return;
    }
    if (this.password == null || this.password === '') {
      this.alertService.alert('密码为空');
      return;
    }
    this.http.post(this.constant.walletToolBackendUrl + '/auth/login', {
      username: this.username,
      password: this.password,
    }).subscribe(res => {
      if ((res as any).code !== 0) {
        this.alertService.alert((res as any).message);
        return;
      }
      this.userService.setUser((res as any).result);
      this.storage.set('uid', this.userService.user.id);
      this.storage.set('token', this.userService.user.token);
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
      if (this.userService.user != null && this.userService.user.id != null && this.userService.user.id !== '') {
        this.http.post(this.constant.walletToolBackendUrl + '/fcm', {
          userId: this.userService.user.id,
          fcmToken: token
        }).subscribe( res => {});
      }
    });
  }

  toForgetPassword() {
    this.router.navigate(['login-forget-password']);
  }

}
