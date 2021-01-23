import { Component, OnInit } from '@angular/core';
import {PrivateKey} from '../../../../entity/private-key';
import {AlertController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {ConstantService} from '../../../../service/constant.service';
import {StorageService} from '../../../../service/storage.service';
import * as bitcoin from 'bitcoinjs-lib';
import * as bip39 from 'bip39';
import * as bip32 from 'bip32';
import * as bitcash from 'bitcore-lib-cash';

@Component({
  selector: 'app-wallet-bch-import',
  templateUrl: './wallet-bch-import.page.html',
  styleUrls: ['./wallet-bch-import.page.scss'],
})
export class WalletBchImportPage implements OnInit {

  privateKey: PrivateKey;
  repeatPassword: string;

  constructor(private alertController: AlertController,
              private route: ActivatedRoute,
              private router: Router,
              private constant: ConstantService,
              private storage: StorageService) {
    this.privateKey = new PrivateKey();
  }

  ngOnInit() {
    this.privateKey.network = this.route.snapshot.paramMap.get('network');
    this.privateKey.isHDWallet = false;
  }

  generateBCHWallet(network) {

    const privateKey = new bitcash.PrivateKey(this.privateKey.bchPrivateKey, network);
    const address = privateKey.toAddress(network);
    this.privateKey.bchAddress = address.toString();
    this.privateKey.bchPrivateKey = privateKey.toString();
  }

  toWallet() {
    let network;
    if (this.privateKey.network === 'testNet') {
      network = bitcash.Networks.testnet;
    } else {
      network = null;
    }
    try {
      this.generateBCHWallet(network);
    } catch (error) {
      this.constant.alert('私钥添加失败' + error.toString());
      return;
    }
    if (this.privateKey.password == null || this.privateKey.password === '') {
      this.constant.alert('钱包密码不能为空!');
      return;
    }
    if (this.privateKey.password !== this.repeatPassword) {
      this.constant.alert('两次输入的钱包密码不匹配!');
      return;
    }

    this.constant.privateKeyList[this.constant.privateKeyListLength] = this.privateKey;
    this.storage.set('privateKeyList', this.constant.privateKeyList);
    this.constant.privateKeyListLength = this.constant.privateKeyListLength + 1;
    this.storage.set('privateKeyListLength', this.constant.privateKeyListLength);
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
