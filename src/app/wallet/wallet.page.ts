import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../constant.service';
import {PrivateKey} from '../entity/private-key';
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
}
