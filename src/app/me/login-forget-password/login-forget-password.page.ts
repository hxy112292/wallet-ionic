import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../service/constant.service';
import {Router} from '@angular/router';
import {AlertService} from '../../service/alert.service';

@Component({
  selector: 'app-login-forget-password',
  templateUrl: './login-forget-password.page.html',
  styleUrls: ['./login-forget-password.page.scss'],
})
export class LoginForgetPasswordPage implements OnInit {

  username: string;
  email: string;

  constructor(private http: HttpClient,
              private router: Router,
              private alertService: AlertService,
              private constant: ConstantService) { }

  ngOnInit() {
  }

  forgetPassword() {
    this.http.post(this.constant.walletToolBackendUrl + '/user/forgetPassword', {
      username: this.username,
      email: this.email
    }).subscribe( res => {
      if ((res as any).code !== 0) {
        this.alertService.alert((res as any).message);
      } else {
        this.alertService.alert('密码已重置，新密码已发送到您的邮箱');
        this.router.navigate(['login']);
      }
    });
  }

}
