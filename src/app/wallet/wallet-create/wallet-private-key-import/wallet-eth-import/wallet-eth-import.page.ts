import { Component, OnInit } from '@angular/core';
import {PrivateKey} from '../../../../entity/private-key';
import {AlertController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {ConstantService} from '../../../../service/constant.service';
import {StorageService} from '../../../../service/storage.service';
import {ethers} from 'ethers';
import {PrivateKeyService} from '../../../../service/private-key.service';
import {AlertService} from '../../../../service/alert.service';

@Component({
  selector: 'app-wallet-eth-import',
  templateUrl: './wallet-eth-import.page.html',
  styleUrls: ['./wallet-eth-import.page.scss'],
})
export class WalletEthImportPage implements OnInit {

  privateKey: PrivateKey;
  repeatPassword: string;

  constructor(private alertController: AlertController,
              private route: ActivatedRoute,
              private router: Router,
              private constant: ConstantService,
              private alertService: AlertService,
              private privateKeyService: PrivateKeyService,
              private storage: StorageService) {
    this.privateKey = new PrivateKey();
  }

  ngOnInit() {
    this.privateKey.network = this.route.snapshot.paramMap.get('network');
    this.privateKey.isHDWallet = false;
  }

  generateETHWallet() {
    const Wallet = new ethers.Wallet(this.privateKey.ethPrivateKey);
    const privateKey = Wallet.privateKey;
    const address = Wallet.address;

    this.privateKey.ethAddress = address;
    this.privateKey.ethPrivateKey = privateKey;
  }

  toWallet() {
    try {
      this.generateETHWallet();
    } catch (error) {
      this.alertService.alert('私钥添加失败' + error.toString());
      return;
    }
    if (this.privateKey.password == null || this.privateKey.password === '') {
      this.alertService.alert('钱包密码不能为空!');
      return;
    }
    if (this.privateKey.password !== this.repeatPassword) {
      this.alertService.alert('两次输入的钱包密码不匹配!');
      return;
    }

    this.privateKeyService.privateKeyList[this.privateKeyService.privateKeyListLength] = this.privateKey;
    this.storage.set('privateKeyList', this.privateKeyService.privateKeyList);
    this.privateKeyService.privateKeyListLength = this.privateKeyService.privateKeyListLength + 1;
    this.storage.set('privateKeyListLength', this.privateKeyService.privateKeyListLength);
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
