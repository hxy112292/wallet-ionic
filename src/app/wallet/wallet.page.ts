import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../service/constant.service';
import {PrivateKey} from '../entity/private-key';
import {StorageService} from '../service/storage.service';
import {number} from 'bitcoinjs-lib/types/script';
import {it} from 'ethers/wordlists';
import {PrivateKeyService} from '../service/private-key.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  hdWalletPrivateKeyList: PrivateKey[];
  notHdWalletPrivateKeyList: PrivateKey [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private constant: ConstantService,
              private privateKeyService: PrivateKeyService,
              private storage: StorageService) {
    this.hdWalletPrivateKeyList = [];
    this.notHdWalletPrivateKeyList = [];
  }

  ngOnInit() {
    this.hdWalletPrivateKeyList = this.privateKeyService.privateKeyList.filter((item) => {
      if (item.isHDWallet === true) {
        return item;
      }
    });
    this.notHdWalletPrivateKeyList = this.privateKeyService.privateKeyList.filter((item) => {
      if (item.isHDWallet !== true) {
        return item;
      }
    });
  }

  toAddWallet() {
    this.router.navigate(['wallet-add-choose']);
  }

  toWalletManagement(privateKey: PrivateKey, i: number) {
    this.router.navigate(['wallet-manage', {privateKeyInfo : JSON.stringify(privateKey), index: i}]);
  }

  toWalletBitcoinCenter(privateKey: PrivateKey) {
    this.router.navigate(['wallet-bitcoin-center', {privateKeyInfo : JSON.stringify(privateKey)}]);
  }

  toWalletEthereumCenter(privateKey: PrivateKey, i: number) {
    this.router.navigate(['wallet-ethereum-erc20-center', {privateKeyInfo : JSON.stringify(privateKey), index: i}]);
  }

  toWalletLTCCenter(privateKey: PrivateKey) {
    this.router.navigate(['wallet-litecoin-center', {privateKeyInfo : JSON.stringify(privateKey)}]);
  }

  toWalletBCHCenter(privateKey: PrivateKey) {
    this.router.navigate(['wallet-bch-center', {privateKeyInfo : JSON.stringify(privateKey)}]);
  }

  toWalletXRPCenter(privateKey: PrivateKey) {
    this.router.navigate(['wallet-xrp-center', {privateKeyInfo : JSON.stringify(privateKey)}]);
  }

  showGroup(id) {

    const btcWallet = document.getElementById(id + 'BTC');
    const ethWallet = document.getElementById(id + 'ETH');
    const bchWallet = document.getElementById(id + 'BCH');
    const ltcWallet = document.getElementById(id + 'LTC');
    const xrpWallet = document.getElementById(id + 'XRP');
    const caretDown = document.getElementById(id + 'caret-down');
    const caretForward = document.getElementById(id + 'caret-forward');

    if (btcWallet.style.display !== 'none') {
      btcWallet.style.display = 'none';
      ethWallet.style.display = 'none';
      bchWallet.style.display = 'none';
      ltcWallet.style.display = 'none';
      xrpWallet.style.display = 'none';
      caretDown.style.display = 'none';
      caretForward.style.display = 'inline';
    } else {
      btcWallet.style.display = 'inline';
      ethWallet.style.display = 'inline';
      bchWallet.style.display = 'inline';
      ltcWallet.style.display = 'inline';
      xrpWallet.style.display = 'inline';
      caretDown.style.display = 'inline';
      caretForward.style.display = 'none';
    }
  }
}
