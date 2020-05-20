import { Component, OnInit } from '@angular/core';
import { ethers } from 'ethers';
import * as bitcoin from 'bitcoinjs-lib';
import * as bip39 from 'bip39';
import * as bip32 from 'bip32';
import {AlertController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-wallet-add',
  templateUrl: './wallet-add.page.html',
  styleUrls: ['./wallet-add.page.scss'],
})
export class WalletAddPage implements OnInit {

  mnemonic: string;

  constructor(private alertController: AlertController,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.generateMnemonic();
    this.generateBTCWallet();
    this.generateETHWallet();
  }

  generateMnemonic() {
    this.mnemonic = ethers.Wallet.createRandom().mnemonic;
  }

  generateBTCWallet() {
    const network = bitcoin.networks.bitcoin;
    const seed = bip39.mnemonicToSeedSync(this.mnemonic);
    // @ts-ignore
    const root = bip32.fromSeed(seed, network);
    const path = 'm/44\'/0\'/0\'/0/0';
    const keyPair = root.derivePath(path);
    const privateKey = keyPair.toWIF();
    console.log('BTC私钥：', privateKey);
    const address = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey , network});
    console.log('BTC地址：', address.address, '\n');
  }

  generateETHWallet() {
    const Wallet = ethers.Wallet.fromMnemonic(this.mnemonic);
    const privateKey = Wallet.privateKey;
    console.log('ETH私钥：', privateKey);
    const address = Wallet.address;
    console.log('ETH地址：', address);
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
            this.router.navigate(['tabs/wallet/wallet-mnemonic-confirm']);
          }
        }
      ]
    });
    await alert.present();
  }
}
