import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModalController, NavParams} from '@ionic/angular';
import { ethers } from 'ethers';
import * as bitcoin from 'bitcoinjs-lib';
import * as bip39 from 'bip39';
import * as bip32 from 'bip32';

@Component({
  selector: 'app-add-wallet',
  templateUrl: './add-wallet.page.html',
  styleUrls: ['./add-wallet.page.scss'],
})
export class AddWalletPage implements OnInit {

  mnemonic: string;

  constructor(private route: ActivatedRoute,
              private modalController: ModalController,
              private navParams: NavParams) { }

  ngOnInit() {
    this.generateMnemonic();
  }

  dismiss(data) {
    this.modalController.dismiss(data).then(() => {

    });
  }

  generateMnemonic() {
    this.mnemonic = ethers.Wallet.createRandom().mnemonic;

    const network = bitcoin.networks.bitcoin
    const seed = bip39.mnemonicToSeedSync(this.mnemonic);
    // @ts-ignore
    const root = bip32.fromSeed(seed, network);
    const path = 'm/44\'/0\'/0\'/0/0';
    const keyPair = root.derivePath(path);
    const privateKey = keyPair.toWIF();
    console.log('BTC私钥：', privateKey);
    const publicKey = keyPair.publicKey.toString('hex');
    console.log('BTC公钥：', publicKey);
    const address = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey , network});
    console.log('BTC地址：', address.address, '\n');
  }
}
