import { Component, OnInit } from '@angular/core';
import {CoinDescPage} from '../coin-detail/coin-desc/coin-desc.page';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {ConstantService} from '../constant.service';
import {ModalController} from '@ionic/angular';
import {PrivateKey} from '../entity/private-key';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  privateKeyList: PrivateKey[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private constant: ConstantService) { }

  ngOnInit() {

    this.privateKeyList = this.constant.privateKeyList;
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
}
