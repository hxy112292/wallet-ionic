import { Component, OnInit } from '@angular/core';
import {CoinDescPage} from '../coin-detail/coin-desc/coin-desc.page';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {ConstantService} from '../constant.service';
import {ModalController} from '@ionic/angular';
import {PrivateKey} from '../entity/private-key';
import {delay} from 'rxjs/operators';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private constant: ConstantService,
              private storage: Storage) { }

  ngOnInit() {
  }

  toAddWallet() {
    this.router.navigate(['tabs/wallet/wallet-add-choose']);
  }

  toWalletManagement(privateKey: PrivateKey, i: number) {
    this.router.navigate(['tabs/wallet/wallet-manage', {privateKeyInfo : JSON.stringify(privateKey), index: i}]);
  }

  toWalletBitcoinCenter(privateKey: PrivateKey) {
    this.router.navigate(['tabs/wallet/wallet-bitcoin-center', {privateKeyInfo : JSON.stringify(privateKey)}]);
  }

  toWalletEthereumCenter(privateKey: PrivateKey, i: number) {
    this.router.navigate(['tabs/wallet/wallet-ethereum-erc20-center', {privateKeyInfo : JSON.stringify(privateKey), index: i}]);
  }

  toWalletLTCCenter(privateKey: PrivateKey) {
    this.router.navigate(['tabs/wallet/wallet-litecoin-center', {privateKeyInfo : JSON.stringify(privateKey)}]);
  }

  toWalletBCHCenter(privateKey: PrivateKey) {
    this.router.navigate(['tabs/wallet/wallet-bch-center', {privateKeyInfo : JSON.stringify(privateKey)}]);
  }

  toWalletXRPCenter(privateKey: PrivateKey) {
    this.router.navigate(['tabs/wallet/wallet-xrp-center', {privateKeyInfo : JSON.stringify(privateKey)}]);
  }
}
