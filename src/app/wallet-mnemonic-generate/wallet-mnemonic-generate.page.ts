import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {ethers} from 'ethers';
import * as bitcoin from 'bitcoinjs-lib';
import * as bip39 from 'bip39';
import * as bip32 from 'bip32';

@Component({
  selector: 'app-wallet-mnemonic-generate',
  templateUrl: './wallet-mnemonic-generate.page.html',
  styleUrls: ['./wallet-mnemonic-generate.page.scss'],
})
export class WalletMnemonicGeneratePage implements OnInit {

  mnemonic: string;

  constructor(private alertController: AlertController,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.generateMnemonic();
  }

  generateMnemonic() {
    this.mnemonic = ethers.Wallet.createRandom().mnemonic;
    console.log(this.mnemonic);
  }

  async toWalletMnemonicConfirm() {
    const alert = await this.alertController.create({
      header: '警告',
      message: '<strong>您确定您将助记词保存到纸上了吗？\n</strong>',
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
            this.router.navigate(['tabs/wallet/wallet-mnemonic-confirm', {mnemonicInfo : this.mnemonic}]);
          }
        }
      ]
    });
    await alert.present();
  }

}
