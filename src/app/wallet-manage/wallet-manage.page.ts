import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PrivateKey} from '../entity/private-key';
import {ConstantService} from '../constant.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-wallet-manage',
  templateUrl: './wallet-manage.page.html',
  styleUrls: ['./wallet-manage.page.scss'],
})
export class WalletManagePage implements OnInit {

  privateKey: PrivateKey;
  index: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private constant: ConstantService,
              private alertController: AlertController) { }

  ngOnInit() {
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
    this.index = Number(this.route.snapshot.paramMap.get('index'));
  }

  exportKey() {
    this.constant.alert('BTC Key:<br>' + this.privateKey.btcPrivateKey + '<br><br>ETH Key:<br>' + this.privateKey.ethPrivateKey);
  }

  exportMnemonic() {
    this.constant.alert('助记词：<br>' + this.privateKey.mnemonic);
  }

  async deleteWallet() {
    const alert = await this.alertController.create({
      header: '警告',
      message: '<strong>您确定要删除这个钱包吗？\n</strong>',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: '确定',
          handler: () => {
            this.constant.privateKeyList.splice(this.index, 1);
            this.constant.privateKeyListLength = this.constant.privateKeyListLength - 1;
            localStorage.removeItem('privateKeyList');
            localStorage.removeItem('privateKeyListLength');
            localStorage.setItem('privateKeyList', JSON.stringify(this.constant.privateKeyList));
            localStorage.setItem('privateKeyListLength', JSON.stringify(this.constant.privateKeyListLength));
            this.router.navigate(['tabs/wallet']);
          }
        }
      ]
    });
    await alert.present();
  }
}
