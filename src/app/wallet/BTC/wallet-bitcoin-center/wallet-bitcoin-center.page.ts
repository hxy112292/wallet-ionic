import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {PrivateKey} from '../../../entity/private-key';
import {StorageService} from '../../../service/storage.service';
import {SochainBtcAddress} from '../../../entity/sochain-btc-address';
import {SochainBtcTransaction} from '../../../entity/sochain-btc-transaction';
import {LoaderService} from '../../../service/loader.service';

@Component({
  selector: 'app-wallet-bitcoin-center',
  templateUrl: './wallet-bitcoin-center.page.html',
  styleUrls: ['./wallet-bitcoin-center.page.scss'],
})
export class WalletBitcoinCenterPage implements OnInit {

  privateKey: PrivateKey;
  sochainBtcAddress: SochainBtcAddress;
  price: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private constant: ConstantService,
              private loaderService: LoaderService,
              private storage: StorageService) {

    this.privateKey = new PrivateKey();

    this.sochainBtcAddress = {
      address: '', balance: '', txs: [], value_usd: 0
    };

    this.price = 0;
  }

  ngOnInit() {
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
    this.getAddressInfo();
    this.getPrice();
  }

  getPrice() {
    this.http.get(this.constant.walletBackendUrl + '/monitorPrice/coinPrice', {
      params: {
        symbol: 'btcusdt'
      }
    }).subscribe( res => {
      this.price = (res as any).result.close;
    });
  }

  getAddressInfo() {
    this.loaderService.showLoader();
    let network;
    if (this.privateKey.network === 'testNet') {
      network = 'BTCTEST';
    } else {
      network = 'BTC';
    }
    this.http.get(this.constant.walletBackendUrl + '/' + network + '/address/' + this.privateKey.btcAddress).subscribe(res => {
      this.sochainBtcAddress = (res as any).data;
      this.loaderService.hideLoader();
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getAddressInfo();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  toWalletBitcoinTransaction(hash: string) {
    this.router.navigate(['wallet-bitcoin-transaction', {transaction: hash, privateKeyInfo: JSON.stringify(this.privateKey)}]);
  }

  toWalletBitcoinReceive(privateKey: PrivateKey) {
    this.router.navigate(['wallet-bitcoin-receive', {privateKeyInfo: JSON.stringify(privateKey)}]);
  }

  toWalletBitcoinSend(privateKey: PrivateKey) {
    this.router.navigate(['wallet-bitcoin-send',
      {privateKeyInfo: JSON.stringify(privateKey), balance: this.sochainBtcAddress.balance}]);
  }

  toCoinDetail() {
    this.router.navigate(['coin-detail', {codeInfo: 'bitcoin'}]);
  }
}
