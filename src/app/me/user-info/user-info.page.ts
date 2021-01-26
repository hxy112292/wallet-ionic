import { Component, OnInit } from '@angular/core';
import {User} from '../../entity/user';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../service/constant.service';
import {FCM} from '@ionic-native/fcm/ngx';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {AlertService} from '../../service/alert.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {

  user: User;
  showUsernameRule: boolean;
  showPasswordRule: boolean;
  alertTitle: string;
  alertMessage: string;
  alertNameMessage: string;
  alertPassMessage: string;
  alertEmailMessage: string;
  alertPhoneMessage: string;

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private userService: UserService,
              private fcm: FCM,
              private alertService: AlertService,
              private localNotifications: LocalNotifications,
              private router: Router) {
    this.user = {
      id: '',
      username: '',
      password: '',
      email: '',
      phone: '',
      role: [],
      token: ''
    };

    this.alertTitle = '';
    this.alertMessage = '';
    this.alertEmailMessage = '';
    this.alertNameMessage = '';
    this.alertPassMessage = '';
    this.alertPhoneMessage = '';

  }

  ngOnInit() {
    this.user = this.userService.user;
  }

  update() {

    this.UsernameCheck();
    this.PasswordCheck();
    this.EmailCheck();
    this.PhoneCheck();

    if (this.alertNameMessage !== '' && this.alertNameMessage != null) {
      this.alertMessage += '<br>USERNAME ERROR:<br>';
      this.alertMessage += this.alertNameMessage;
    }
    if (this.alertPassMessage !== '' && this.alertPassMessage != null) {
      this.alertMessage += '<br>PASSWORD ERROR:<br>';
      this.alertMessage += this.alertPassMessage;
    }
    if (this.alertEmailMessage !== '' && this.alertEmailMessage != null) {
      this.alertMessage += '<br>EMAIL ERROR:<br>';
      this.alertMessage += this.alertEmailMessage;
    }
    if (this.alertPhoneMessage !== '' && this.alertPhoneMessage != null) {
      this.alertMessage += '<br>PHONE ERROR:<br>';
      this.alertMessage += this.alertPhoneMessage;
    }
    if (this.alertMessage !== '' && this.alertMessage != null) {
      this.alertService.alert(this.alertMessage);
      this.initAllAlert();
      return;
    }

    this.userService.user.phone = this.user.phone;
    this.userService.user.email = this.user.email;
    this.userService.user.password = this.user.password;
    this.userService.user.username = this.user.username;
    this.http.put(this.constant.walletToolBackendUrl + '/user/update', this.userService.user).subscribe(res => {
      if ((res as any).code !== 0) {
        this.alertService.alert((res as any).message);
        return;
      }
      this.userService.setUser((res as any).result);
      localStorage.setItem('uid', this.userService.user.id);
      this.getToken();
      this.router.navigate(['/tabs/me']);
    });
  }

  getToken() {
    this.fcm.getToken().then(token => {
      // Register your new token in your back-end if you want
      // backend.registerToken(token);
      if (this.userService.user != null && this.userService.user.id != null && this.userService.user.id !== '') {
        this.http.post(this.constant.walletToolBackendUrl + '/fcm/register', {
          userId: this.userService.user.id,
          fcmToken: token
        }).subscribe( res => {});
      }
    });
  }

  initAllAlert() {
    this.alertTitle = '';
    this.alertMessage = '';
    this.alertEmailMessage = '';
    this.alertNameMessage = '';
    this.alertPassMessage = '';
    this.alertPhoneMessage = '';
  }

  UsernameCheck() {
    if (this.user.username == null || this.user.username === '') {
      this.alertNameMessage += '● 用户名为空<br>';
    }
    if (this.user.username.length < 3 || this.user.username.length > 15) {
      this.alertNameMessage += '● 用户名长度不是3-15字符<br>';
    }
    if (this.user.username.match('[!@#$%^&*()~`,.<>?/:;\'\"{}\[\]|\\]')) {
      this.alertNameMessage += '● 用户名只支持数字和字母<br>';
    }
  }

  PasswordCheck() {
    if (this.user.password == null || this.user.password === '') {
      this.alertPassMessage += '● 密码为空<br>';
    }
    if (this.user.password.length < 6 || this.user.password.length > 20) {
      this.alertPassMessage += '● 密码长度不是6-20字符<br>';
    }
  }

  EmailCheck() {
    if (this.user.email == null || this.user.email === '') {
      this.alertEmailMessage += '● 邮件为空<br>';
    }
    if (!this.user.email.match('@')) {
      this.alertEmailMessage += '● 邮件格式错误<br>';
    }
  }

  PhoneCheck() {
    if (this.user.phone == null || this.user.phone === '') {
      this.alertPhoneMessage += '● 手机为空<br>';
    }
    if (!(this.user.phone.match('[+][0-9]') || this.user.phone.match('[0-9]')) || this.user.phone.length < 7 ) {
      this.alertPhoneMessage += '● 手机格式错误<br>';
    }
  }

  UsernameRuleShow() {
    this.showUsernameRule = true;
    this.showPasswordRule = false;
  }

  PasswordRuleShow() {
    this.showUsernameRule = false;
    this.showPasswordRule = true;
  }

  ruleClose() {
    this.showPasswordRule = false;
    this.showUsernameRule = false;
  }

  showPasswordOrNot() {
    const passwordInput = document.getElementById('password');
    const passwordEye = document.getElementById('passwordEye');

    if (passwordEye.getAttribute('color') === 'medium') {
      passwordInput.setAttribute('type', 'text');
      passwordEye.setAttribute('color', 'primary');
    } else {
      passwordInput.setAttribute('type', 'password');
      passwordEye.setAttribute('color', 'medium');
    }
  }

}
