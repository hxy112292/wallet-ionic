import {Component, OnInit} from '@angular/core';
import {PrivateKey} from '../../../entity/private-key';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {StorageService} from '../../../service/storage.service';
import {CryptoBchAddress} from '../../../entity/crypto-bch-address';
import {CryptoBchTx} from '../../../entity/crypto-bch-tx';
import {LoaderService} from '../../../service/loader.service';
import {MathService} from '../../../service/math.service';

@Component({
  selector: 'app-wallet-bch-center',
  templateUrl: './wallet-bch-center.page.html',
  styleUrls: ['./wallet-bch-center.page.scss'],
})
export class WalletBchCenterPage implements OnInit {

  privateKey: PrivateKey;
  cryptoBchAddress: CryptoBchAddress;
  cryptoBchTxList: CryptoBchTx[];
  price: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private constant: ConstantService,
              private loaderService: LoaderService,
              private mathService: MathService,
              private storage: StorageService) {

    this.privateKey = new PrivateKey();

    this.cryptoBchAddress = {
      address: '', balance: '', legacy: ''
    };

    this.cryptoBchTxList = [];
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
        symbol: 'bchusdt'
      }
    }).subscribe( res => {
      this.price = (res as any).result.close;
    });
  }

  getAddressInfo() {
    this.loaderService.showLoader();
    let network;
    if (this.privateKey.network === 'testNet') {
      network = 'BCHTEST';
    } else {
      network = 'BCH';
    }
    this.http.get(this.constant.walletBackendUrl + '/' + network + '/address/' + this.privateKey.bchAddress).subscribe(res => {
      this.cryptoBchAddress = (res as any).payload;
    });
    // tslint:disable-next-line:max-line-length
    this.http.get(this.constant.walletBackendUrl + '/' + network + '/address/' + this.privateKey.bchAddress + '/transaction').subscribe( res => {
          this.cryptoBchTxList = res as any;
          // tslint:disable-next-line:prefer-for-of
          for (let i = 0; i < this.cryptoBchTxList.length; i++) {
            let inValue = 0;
            // tslint:disable-next-line:prefer-for-of
            for (let j = 0; j < this.cryptoBchTxList[i].txins.length; j++) {
              if (this.cryptoBchTxList[i].txins[j].addresses[0] === this.cryptoBchAddress.address) {
                inValue = this.mathService.accAdd(inValue, this.cryptoBchTxList[i].txins[j].amount);
              }
            }
            let outValue = 0;
            // tslint:disable-next-line:prefer-for-of
            for (let k = 0; k < this.cryptoBchTxList[i].txouts.length; k++) {
              if (this.cryptoBchTxList[i].txouts[k].addresses[0] === this.cryptoBchAddress.address) {
                outValue = this.mathService.accAdd(outValue, Number(this.cryptoBchTxList[i].txouts[k].amount));
              }
            }
            this.cryptoBchTxList[i].value = Number(this.mathService.accSub(outValue, inValue));
          }
          console.log(this.cryptoBchTxList);
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

  toWalletBchTransaction(hash: string) {
    this.router.navigate(['wallet-bch-transaction', {transaction: hash, privateKeyInfo: JSON.stringify(this.privateKey)}]);
  }

  toWalletBchReceive(privateKey: PrivateKey) {
    this.router.navigate(['wallet-bch-receive', {privateKeyInfo: JSON.stringify(privateKey)}]);
  }

  toWalletBchSend(privateKey: PrivateKey) {
    this.router.navigate(['wallet-bch-send',
      {privateKeyInfo: JSON.stringify(privateKey), balance: this.cryptoBchAddress.balance, txList: JSON.stringify(this.cryptoBchTxList), cashAddress: this.cryptoBchAddress.address}]);
  }

  toCoinDetail() {
    this.router.navigate(['coin-detail', {codeInfo: 'bitcoin-cash'}]);
  }

}
