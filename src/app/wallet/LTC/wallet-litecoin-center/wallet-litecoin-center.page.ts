import {Component, OnInit} from '@angular/core';
import {PrivateKey} from '../../../entity/private-key';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {StorageService} from '../../../service/storage.service';
import {SochainLtcAddress} from '../../../entity/sochain-ltc-address';
import {LoaderService} from '../../../service/loader.service';

@Component({
  selector: 'app-wallet-litecoin-center',
  templateUrl: './wallet-litecoin-center.page.html',
  styleUrls: ['./wallet-litecoin-center.page.scss'],
})
export class WalletLitecoinCenterPage implements OnInit {

  privateKey: PrivateKey;
  sochainLtcAddress: SochainLtcAddress;
  price: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private constant: ConstantService,
              private loaderService: LoaderService,
              private storage: StorageService) {

    this.privateKey = new PrivateKey();

    this.sochainLtcAddress = {
      value_usd: 0,
      address: '', balance: '', txs: []
    };

    this.price = 0;
  }

  ngOnInit() {
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
    this.getAddressInfo();
    this.getPrice();
  }

  getPrice() {
    this.http.get(this.constant.walletToolBackendUrl + '/monitorPrice/coinPrice', {
      params: {
        symbol: 'ltcusdt'
      }
    }).subscribe( res => {
      this.price = (res as any).result.close;
    });
  }

  getAddressInfo() {
    this.loaderService.showLoader();
    let network;
    if (this.privateKey.network === 'testNet') {
      network = 'LTCTEST';
    } else {
      network = 'LTC';
    }
    this.http.get(this.constant.walletBackendUrl + '/' + network + '/address/' + this.privateKey.ltcAddress).subscribe(res => {
      this.sochainLtcAddress = (res as any).data;
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

  toWalletLitecoinTransaction(hash: string) {
    this.router.navigate(['wallet-litecoin-transaction', {transaction: hash, privateKeyInfo: JSON.stringify(this.privateKey)}]);
  }

  toWalletLitecoinReceive(privateKey: PrivateKey) {
    this.router.navigate(['wallet-litecoin-receive', {privateKeyInfo: JSON.stringify(privateKey)}]);
  }

  toWalletLitecoinSend(privateKey: PrivateKey) {
    this.router.navigate(['wallet-litecoin-send',
      {privateKeyInfo: JSON.stringify(privateKey), balance: this.sochainLtcAddress.balance}]);
  }

  toCoinDetail() {
    this.router.navigate(['coin-detail', {codeInfo: 'litecoin'}]);
  }

}
