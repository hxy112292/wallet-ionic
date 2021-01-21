import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ConstantService} from '../../../service/constant.service';
import {PrivateKey} from '../../../entity/private-key';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-wallet-mnemonic-password',
  templateUrl: './wallet-mnemonic-password.page.html',
  styleUrls: ['./wallet-mnemonic-password.page.scss'],
})
export class WalletMnemonicPasswordPage implements OnInit {

  index: number;
  mnemonicInput: string;
  privateKey: PrivateKey;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private alertController: AlertController,
              private constant: ConstantService) {
    this.mnemonicInput = '';
  }

  ngOnInit() {
    this.index = Number(this.route.snapshot.paramMap.get('index'));
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
  }

  checkMnemonic() {
    if (this.mnemonicInput !== this.privateKey.mnemonic) {
      this.constant.alert('助记词错误！');
    } else {
      this.router.navigate(['wallet-reset-password', {index: this.index}]);
    }
  }
}
