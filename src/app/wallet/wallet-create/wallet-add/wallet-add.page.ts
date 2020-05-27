import {Component, OnInit} from '@angular/core';
import {ethers} from 'ethers';
import * as bitcoin from 'bitcoinjs-lib';
import * as litecore from 'litecore-lib';
import * as bip39 from 'bip39';
import * as bip32 from 'bip32';
import {AlertController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {PrivateKey} from '../../../entity/private-key';
import {ConstantService} from '../../../constant.service';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-wallet-add',
  templateUrl: './wallet-add.page.html',
  styleUrls: ['./wallet-add.page.scss'],
})
export class WalletAddPage implements OnInit {

  privateKey: PrivateKey;
  repeatPassword: string;

  constructor(private alertController: AlertController,
              private route: ActivatedRoute,
              private router: Router,
              private constant: ConstantService,
              private storage: Storage) {
    this.privateKey = {
      ltcAddress: '', ltcPrivateKey: '',
      mnemonic: '',
      btcAddress: '',
      btcPrivateKey: '',
      ethAddress: '',
      ethPrivateKey: '',
      password: ''
    };
  }

  ngOnInit() {
    this.privateKey.mnemonic = this.route.snapshot.paramMap.get('mnemonicInfo');
    this.generateBTCWallet();
    this.generateETHWallet();
    this.generateLTCWallet();
  }

  generateBTCWallet() {
    const network = bitcoin.networks.testnet;
    const seed = bip39.mnemonicToSeedSync(this.privateKey.mnemonic);
    // @ts-ignore
    const root = bip32.fromSeed(seed, network);
    const path = 'm/44\'/0\'/0\'/0/0';
    const keyPair = root.derivePath(path);
    const privateKey = keyPair.toWIF();
    const address = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey , network});

    this.privateKey.btcAddress = address.address;
    this.privateKey.btcPrivateKey = privateKey;
  }

  generateETHWallet() {
    const Wallet = ethers.Wallet.fromMnemonic(this.privateKey.mnemonic);
    const privateKey = Wallet.privateKey;
    const address = Wallet.address;

    this.privateKey.ethAddress = address;
    this.privateKey.ethPrivateKey = privateKey;
  }

  generateLTCWallet() {

    const network = litecore.Networks.testnet;
    const seed = bip39.mnemonicToSeedSync(this.privateKey.mnemonic);
    // @ts-ignore
    const root = bip32.fromSeed(seed, bitcoin.networks.testnet);
    const path = 'm/44\'/2\'/0\'/0/0';
    const keyPair = root.derivePath(path);
    const wif = keyPair.toWIF();

    const privateKey = new litecore.PrivateKey(wif, network);
    const address = privateKey.toAddress(network);
    this.privateKey.ltcAddress = address.toString();
    this.privateKey.ltcPrivateKey = privateKey.toString();
  }

  toWallet() {

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
