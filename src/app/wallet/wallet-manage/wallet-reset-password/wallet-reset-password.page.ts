import { Component, OnInit } from '@angular/core';
import {PrivateKey} from '../../../entity/private-key';
import {AlertController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {ConstantService} from '../../../service/constant.service';
import {StorageService} from '../../../service/storage.service';

@Component({
  selector: 'app-wallet-reset-password',
  templateUrl: './wallet-reset-password.page.html',
  styleUrls: ['./wallet-reset-password.page.scss'],
})
export class WalletResetPasswordPage implements OnInit {

  password: string;
  repeatPassword: string;
  index: number;

  constructor(private alertController: AlertController,
              private route: ActivatedRoute,
              private router: Router,
              private constant: ConstantService,
              private storage: StorageService) {
  }

  ngOnInit() {
    this.index = Number(this.route.snapshot.paramMap.get('index'));
  }

  toWallet() {

    if (this.password == null || this.password === '') {
      this.constant.alert('钱包密码不能为空!');
      return;
    }
    if (this.password !== this.repeatPassword) {
      this.constant.alert('两次输入的钱包密码不匹配!');
      return;
    }

    this.constant.privateKeyList[this.index].password = this.password;
    this.storage.set('privateKeyList', this.constant.privateKeyList);
    this.constant.alert('密码重置成功');
    this.router.navigate(['tabs/wallet']);
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

}
