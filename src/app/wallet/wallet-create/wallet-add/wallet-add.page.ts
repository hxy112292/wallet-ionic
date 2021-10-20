import {Component, OnInit} from '@angular/core';
import {ethers} from 'ethers';
import * as bitcoin from 'bitcoinjs-lib';
import * as litecore from 'litecore-lib';
import * as bitcash from 'bitcore-lib-cash';
import * as rip32 from 'ripple-bip32';
import * as ripkey from 'ripple-keypairs';
import * as bip39 from 'bip39';
import * as bip32 from 'bip32';
import {AlertController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {PrivateKey} from '../../../entity/private-key';
import {ConstantService} from '../../../service/constant.service';
import {StorageService} from '../../../service/storage.service';
import {PrivateKeyService} from '../../../service/private-key.service';
import {AlertService} from '../../../service/alert.service';

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
              private alertService: AlertService,
              private privateKeyService: PrivateKeyService,
              private storage: StorageService) {
    this.privateKey = new PrivateKey();
  }

  ngOnInit() {
    this.privateKey.mnemonic = this.route.snapshot.paramMap.get('mnemonicInfo');
    this.privateKey.network = this.route.snapshot.paramMap.get('network');
    this.privateKey.isHDWallet = true;
    // if (this.privateKey.network === 'testNet') {
    //   this.generateBTCWallet(bitcoin.networks.testnet);
    //   this.generateLTCWallet(litecore.Networks.testnet);
    //   this.generateBCHWallet(bitcash.Networks.testnet);
    // } else {
    //   this.generateBTCWallet(bitcoin.networks.bitcoin);
    //   this.generateLTCWallet(litecore.Networks.mainnet);
    //   this.generateBCHWallet(null);
    // }
    // this.generateETHWallet();
    // this.generateXRPWallet();
    this.generateHDWallet(this.privateKey.network);
  }

  private generateHDWallet(network) {
    const seed = bip39.mnemonicToSeedSync(this.privateKey.mnemonic);
    // @ts-ignore
    const btcPath = 'm/44\'/0\'/0\'/0/0';
    const ethPath = 'm/44\'/60\'/0\'/0/0';
    const ltcPath = 'm/44\'/2\'/0\'/0/0';
    const bchPath = 'm/44\'/145\'/0\'/0/0';
    let net = null;
    const provider = new ethers.providers.EtherscanProvider();
    if (network === 'testNet') {
      net = bitcoin.networks.testnet;
    }
    const btcKeyPair = bip32.fromSeed(seed, net).derivePath(btcPath);
    const ethKeyPair = bip32.fromSeed(seed, null).derivePath(ethPath);
    const ltcKeyPair = bip32.fromSeed(seed, net).derivePath(ltcPath);
    const bchKeyPair = bip32.fromSeed(seed, net).derivePath(bchPath);
    this.privateKey.btcPrivateKey = btcKeyPair.toWIF();
    this.privateKey.ethPrivateKey = '0x' + this.buf2hex(ethKeyPair.privateKey);
    this.privateKey.ltcPrivateKey = this.buf2hex(ltcKeyPair.privateKey);
    this.privateKey.bchPrivateKey = this.buf2hex(bchKeyPair.privateKey);
    this.privateKey.btcAddress = bitcoin.payments.p2pkh({ pubkey: btcKeyPair.publicKey , network: net}).address;
    this.privateKey.ethAddress = new ethers.Wallet(this.privateKey.ethPrivateKey, provider).address;
    this.privateKey.ltcAddress = bitcoin.payments.p2pkh({ pubkey: ltcKeyPair.publicKey , network: net}).address;
    this.privateKey.bchAddress = bitcoin.payments.p2pkh({ pubkey: bchKeyPair.publicKey , network: net}).address;
  }

  private buf2hex(buffer) { // buffer is an ArrayBuffer
    return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
  }

  // generateBTCWallet(network) {
  //   const seed = bip39.mnemonicToSeedSync(this.privateKey.mnemonic);
  //   // @ts-ignore
  //   const root = bip32.fromSeed(seed, network);
  //   const path = 'm/44\'/0\'/0\'/0/0';
  //   const keyPair = root.derivePath(path);
  //   const privateKey = keyPair.toWIF();
  //   const address = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey , network});
  //
  //   this.privateKey.btcAddress = address.address;
  //   this.privateKey.btcPrivateKey = privateKey;
  // }
  //
  // generateETHWallet() {
  //   const Wallet = ethers.Wallet.fromMnemonic(this.privateKey.mnemonic);
  //   const privateKey = Wallet.privateKey;
  //   const address = Wallet.address;
  //
  //   this.privateKey.ethAddress = address;
  //   this.privateKey.ethPrivateKey = privateKey;
  // }
  //
  // generateLTCWallet(network) {
  //   if (this.privateKey.network === 'testNet') {
  //     const seed = bip39.mnemonicToSeedSync(this.privateKey.mnemonic);
  //     // @ts-ignore
  //     const root = bip32.fromSeed(seed, bitcoin.networks.testnet);
  //     const path = 'm/44\'/2\'/0\'/0/0';
  //     const keyPair = root.derivePath(path);
  //     const wif = keyPair.toWIF();
  //
  //     const privateKey = new litecore.PrivateKey(wif, network);
  //     const address = privateKey.toAddress(network);
  //     this.privateKey.ltcAddress = address.toString();
  //     this.privateKey.ltcPrivateKey = privateKey.toString();
  //   } else {
  //     const value = new Buffer(this.privateKey.mnemonic);
  //     const hash = litecore.crypto.Hash.sha256(value);
  //     const bn = litecore.crypto.BN.fromBuffer(hash);
  //     const privateKey = new litecore.PrivateKey(bn);
  //     const address = privateKey.toAddress(network);
  //     this.privateKey.ltcAddress = address.toString();
  //     this.privateKey.ltcPrivateKey = privateKey.toString();
  //   }
  // }
  //
  // generateBCHWallet(network) {
  //   const seed = bip39.mnemonicToSeedSync(this.privateKey.mnemonic);
  //   let root;
  //   // @ts-ignore
  //   if (this.privateKey.network === 'testNet') {
  //     root = bip32.fromSeed(seed, bitcoin.networks.testnet);
  //   } else {
  //     root = bip32.fromSeed(seed, bitcoin.networks.bitcoin);
  //   }
  //
  //   const path = 'm/44\'/145\'/0\'/0/0';
  //   const keyPair = root.derivePath(path);
  //   const wif = keyPair.toWIF();
  //
  //   const privateKey = new bitcash.PrivateKey(wif, network);
  //   const address = privateKey.toAddress(network);
  //   this.privateKey.bchAddress = address.toString();
  //   this.privateKey.bchPrivateKey = privateKey.toString();
  // }
  //
  // generateXRPWallet() {
  //   const seed = bip39.mnemonicToSeedSync(this.privateKey.mnemonic);
  //   const root = rip32.fromSeedBuffer(seed);
  //   const keyPair = root.derivePath('m/44\'/144\'/0\'/0/0').keyPair.getKeyPairs();
  //   const address = ripkey.deriveAddress(keyPair.publicKey);
  //   const privateKey = keyPair.privateKey;
  //
  //   this.privateKey.xrpKeyPair = keyPair;
  //   this.privateKey.xrpAddress = address;
  //   this.privateKey.xrpPrivateKey = privateKey;
  // }

  private toWallet() {

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

  private showPasswordOrNot() {
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
