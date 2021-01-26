import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ConstantService} from '../service/constant.service';
import {AppUpdate} from '@ionic-native/app-update/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import {StorageService} from '../service/storage.service';
import {ToastController} from '@ionic/angular';
import {UserService} from '../service/user.service';
import {AlertService} from '../service/alert.service';

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
              private storage: StorageService,
              private userService: UserService,
              private alertService: AlertService,
              private toastController: ToastController) { }

  ngOnInit() {
    this.getVersion();
  }

  login() {
    this.router.navigate(['login']);
  }

  userInfo() {
    this.router.navigate(['user-info']);
  }

  async logout() {
    this.userService.setUser(null);
    this.storage.remove('uid');
    const toast = await this.toastController.create({
      message: '已退出',
      duration: 2000
    });
    await toast.present();
  }

  getVersion() {
    this.appVersion.getVersionNumber().then( res => {
      this.appVersionNumber = res;
    }).catch( err => {
      console.log(err);
    });
  }

  checkVersion() {
    const updateUrl = this.constant.walletToolBackendUrl + '/update/xml';
    this.appUpdate.checkAppUpdate(updateUrl).then(
        res => {
          console.log(res);
          if (res.code === 202) {
            this.alertService.alert('恭喜你！这个版本是最新的版本!');
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

  webUrl() {
    this.router.navigate(['website']);
  }
}
