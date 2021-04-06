import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {AlertService} from '../../../service/alert.service';
import {UserService} from '../../../service/user.service';
import {Router} from '@angular/router';
import {FCM} from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.page.html',
  styleUrls: ['./update-password.page.scss'],
})
export class UpdatePasswordPage implements OnInit {

  showPasswordRule: boolean;
  oldPassword: string;
  newPassword: string;
  repeatPassword: string;
  alertPassMessage: string;
  alertMessage: string;

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private alertService: AlertService,
              private userService: UserService,
              private router: Router) {
    this.showPasswordRule = false;
    this.oldPassword = '';
    this.newPassword = '';
    this.repeatPassword = '';
    this.alertPassMessage = '';
    this.alertMessage = '';
  }

  ngOnInit() {
  }

  update() {

    this.passwordCheck();

    if (this.alertPassMessage !== '' && this.alertPassMessage != null) {
      this.alertMessage += '<br>PASSWORD ERROR:<br>';
      this.alertMessage += this.alertPassMessage;
    }
    if (this.alertMessage !== '' && this.alertMessage != null) {
      this.alertService.alert(this.alertMessage);
      this.initAllAlert();
      return;
    }

    const password = {
      oldPassword: this.oldPassword,
      newPassword: this.newPassword,
      repeatPassword: this.repeatPassword
    };

    this.http.put(this.constant.walletBackendUrl + '/user/updatePassword', password).subscribe(res => {
      if ((res as any).code !== 0) {
        this.alertService.alert((res as any).message);
        return;
      }
      this.alertService.alert('修改成功');
      this.router.navigate(['/tabs/me']);
    });
  }

  PasswordRuleShow() {
    this.showPasswordRule = true;
  }

  ruleClose() {
    this.showPasswordRule = false;
  }

  showPasswordOrNot() {
    const oldPasswordInput = document.getElementById('oldPassword');
    const newPasswordInput = document.getElementById('newPassword');
    const repeatPasswordInput = document.getElementById('repeatPassword');
    const passwordEye = document.getElementById('passwordEye');

    if (passwordEye.getAttribute('color') === 'medium') {
      oldPasswordInput.setAttribute('type', 'text');
      newPasswordInput.setAttribute('type', 'text');
      repeatPasswordInput.setAttribute('type', 'text');
      passwordEye.setAttribute('color', 'primary');
    } else {
      oldPasswordInput.setAttribute('type', 'password');
      newPasswordInput.setAttribute('type', 'password');
      repeatPasswordInput.setAttribute('type', 'password');
      passwordEye.setAttribute('color', 'medium');
    }
  }

  initAllAlert() {
    this.alertPassMessage = '';
  }

  passwordCheck() {
    if (this.oldPassword == null || this.oldPassword === '' || this.newPassword == null || this.newPassword === '' || this.repeatPassword == null || this.repeatPassword === '') {
      this.alertPassMessage += '● 密码为空<br>';
    }
    if (this.newPassword.length < 6 || this.newPassword.length > 20) {
      this.alertPassMessage += '● 密码长度不是6-20字符<br>';
    }
    if (this.newPassword !== this. repeatPassword) {
      this.alertPassMessage += '● 密码和重复密码不匹配<br>';
    }
  }

}
