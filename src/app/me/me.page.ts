import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ConstantService} from '../constant.service';
import {AppUpdate} from '@ionic-native/app-update/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-me',
  templateUrl: './me.page.html',
  styleUrls: ['./me.page.scss'],
})
export class MePage implements OnInit {

  appVersionNumber: string;

  constructor(private router: Router,
              private constant: ConstantService,
              private appUpdate: AppUpdate,
              private appVersion: AppVersion,
              private storage: Storage) { }

  ngOnInit() {
    this.getVersion();
  }

  login() {
    this.router.navigate(['login']);
  }

  userInfo() {
    this.router.navigate(['user-info']);
  }

  logout() {
    this.constant.setUser(null);
    this.storage.remove('uid');
  }

  getVersion() {
    this.appVersion.getVersionNumber().then( res => {
      this.appVersionNumber = res;
    }).catch( err => {
      console.log(err);
    });
  }

  checkVersion() {
    const updateUrl = this.constant.baseUrl + '/update/xml';
    this.appUpdate.checkAppUpdate(updateUrl).then(
        res => {
          console.log(res);
          if (res.code === 202) {
            this.constant.alert('恭喜你！这个版本是最新的版本!');
          }
        }).catch(
        err => {
          console.log(err);
        }
    );
  }

  walletContactManage() {
    this.router.navigate(['wallet-contact']);
  }

  githubUrl() {
    this.router.navigate(['github']);
  }
}
