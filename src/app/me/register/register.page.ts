import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../service/constant.service';
import {FCM} from '@ionic-native/fcm/ngx';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';
import {Router} from '@angular/router';
import {User} from '../../entity/user';
import {StorageService} from '../../service/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: User;
  repeatPassword: any;
  showUsernameRule: boolean;
  showPasswordRule: boolean;
  privacyAgree: boolean;
  alertTitle: string;
  alertMessage: string;
  alertNameMessage: string;
  alertPassMessage: string;
  alertEmailMessage: string;
  alertPhoneMessage: string;
  alertPrivacyMessage: string;

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private fcm: FCM,
              private localNotifications: LocalNotifications,
              private router: Router,
              private storage: StorageService) {
    this.user = {
      id: '',
      username: '',
      password: '',
      email: '',
      phone: '',
      role: 'USER'
    };

    this.alertTitle = '';
    this.alertMessage = '';
    this.alertEmailMessage = '';
    this.alertNameMessage = '';
    this.alertPassMessage = '';
    this.alertPhoneMessage = '';
    this.alertPrivacyMessage = '';

    this.privacyAgree = false;
  }

  ngOnInit() {
  }

  signup() {

    this.UsernameCheck();
    this.PasswordCheck();
    this.EmailCheck();
    this.PhoneCheck();
    this.PrivacyCheck();

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
    if (this.alertPrivacyMessage !== '' && this.alertPrivacyMessage != null) {
      this.alertMessage += '<br>PRIVACY ERROR<br>';
      this.alertMessage += this.alertPrivacyMessage;
    }
    if (this.alertMessage !== '' && this.alertMessage != null) {
      this.constant.alert(this.alertMessage);
      this.initAllAlert();
      return;
    }

    if (this.constant.getUser() == null || this.constant.getUser().role == null || this.constant.getUser().role === '') {
      this.http.post(this.constant.walletToolBackendUrl + '/user/register', this.user).subscribe(res => {
        if ((res as any).code !== 0) {
          this.constant.alert((res as any).message);
          return;
        }
        this.constant.setUser((res as any).result);
        this.storage.set('uid', this.constant.getUser().id);
        this.getToken();
        this.router.navigate(['/tabs/me']);
      });
    } else if (this.constant.getUser().id != null && this.constant. getUser().id !== '' &&
        this.constant.getUser() != null && this.constant.getUser().role === 'GUEST') {
      this.constant.getUser().phone = this.user.phone;
      this.constant.getUser().email = this.user.email;
      this.constant.getUser().password = this.user.password;
      this.constant.getUser().username = this.user.username;
      this.constant.getUser().role = 'USER';
      this.http.put(this.constant.walletToolBackendUrl + '/user/update', this.constant.getUser()).subscribe(res => {
        if ((res as any).code !== 0) {
          this.constant.alert((res as any).message);
          return;
        }
        this.constant.setUser((res as any).result);
        this.storage.set('uid', this.constant.getUser().id);
        this.getToken();
        this.router.navigate(['/tabs/me']);
      });
    }
  }

  getToken() {
    this.fcm.getToken().then(token => {
      // Register your new token in your back-end if you want
      // backend.registerToken(token);
      if (this.constant.getUser() != null && this.constant.getUser().id != null && this.constant.getUser().id !== '') {
        this.http.post(this.constant.walletToolBackendUrl + '/fcm/register', {
          userId: this.constant.getUser().id,
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
    this.alertPrivacyMessage = '';
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
    if (this.user.password !== this. repeatPassword) {
      this.alertPassMessage += '● 密码和重复密码不匹配<br>';
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

  PrivacyCheck() {
    if (this.privacyAgree == null || this.privacyAgree === false) {
      this.alertPrivacyMessage += '● 您未同意协议<br>';
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
    const repeatPasswordInput = document.getElementById('repeatPassword');
    const passwordEye = document.getElementById('passwordEye');

    if (passwordEye.getAttribute('color') === 'medium') {
      passwordInput.setAttribute('type', 'text');
      repeatPasswordInput.setAttribute('type', 'text');
      passwordEye.setAttribute('color', 'primary');
    } else {
      passwordInput.setAttribute('type', 'password');
      repeatPasswordInput.setAttribute('type', 'password');
      passwordEye.setAttribute('color', 'medium');
    }
  }

  toPrivacy() {
    this.router.navigate(['register-privacy']);
  }

}
