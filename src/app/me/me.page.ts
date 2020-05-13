import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ConstantService} from '../constant.service';
import {AppUpdate} from '@ionic-native/app-update/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-me',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss'],
})
export class MePage implements OnInit {

  appVersionNumber: string;

  constructor(private router: Router,
              public constant: ConstantService,
              private appUpdate: AppUpdate,
              private appVersion: AppVersion) { }

  ngOnInit() {
    this.getVersion();
  }

  login() {
    this.router.navigate(['tabs/me/login']);
  }

  personalInfo() {
    this.router.navigate(['tabs/me/personal-info']);
  }

  logout() {
    this.constant.setUser(null);
    localStorage.removeItem('uid');
  }

  getVersion() {
    this.appVersion.getVersionNumber().then( res => {
      this.appVersionNumber = res;
    }).catch( err => {
      console.log(err);
    });
  }

  checkVersion() {
    this.getVersion();
    const updateUrl = this.constant.baseUrl + '/update/xml';
    this.appUpdate.checkAppUpdate(updateUrl).then(
        res => {
          console.log(res);
          if (res.code === 202) {
            this.constant.alert('Congratulation! The version is latest!');
          }
        }).catch(
        err => {
          console.log(err);
        }
    );
  }
}
