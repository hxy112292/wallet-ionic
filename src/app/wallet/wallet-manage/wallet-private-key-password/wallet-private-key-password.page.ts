import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {ConstantService} from '../../../service/constant.service';
import {PrivateKey} from '../../../entity/private-key';
import {AlertService} from '../../../service/alert.service';

@Component({
  selector: 'app-wallet-private-key-password',
  templateUrl: './wallet-private-key-password.page.html',
  styleUrls: ['./wallet-private-key-password.page.scss'],
})
export class WalletPrivateKeyPasswordPage implements OnInit {
  index: number;
  privateKeyInput: any;
  privateKeyCorrect: any;
  privateKey: PrivateKey;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private alertService: AlertService) {
    this.privateKeyInput = '';
    this.privateKeyCorrect = '';
  }

  ngOnInit() {
    this.index = Number(this.route.snapshot.paramMap.get('index'));
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
  }

  checkPrivateKey() {
    if (this.privateKey.btcPrivateKey != null) {
      this.privateKeyCorrect = this.privateKey.btcPrivateKey;
    } else if (this.privateKey.ethPrivateKey != null) {
      this.privateKeyCorrect = this.privateKey.ethPrivateKey;
    } else if (this.privateKey.ltcPrivateKey != null) {
      this.privateKeyCorrect = this.privateKey.ltcPrivateKey;
    } else if (this.privateKey.bchPrivateKey != null) {
      this.privateKeyCorrect = this.privateKey.bchPrivateKey;
    } else if (this.privateKey.xrpPrivateKey != null) {
      this.privateKeyCorrect = this.privateKey.xrpPrivateKey;
    }
    if (this.privateKeyInput !== this.privateKeyCorrect) {
      this.alertService.alert('私钥错误！');
    } else {
      this.router.navigate(['wallet-reset-password', {index: this.index}]);
    }
  }
}
