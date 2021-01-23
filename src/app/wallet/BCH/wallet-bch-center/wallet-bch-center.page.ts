import {Component, OnInit} from '@angular/core';
import {PrivateKey} from '../../../entity/private-key';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {StorageService} from '../../../service/storage.service';
import {CryptoBchAddress} from '../../../entity/crypto-bch-address';
import {CryptoBchTx} from '../../../entity/crypto-bch-tx';

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
              private storage: StorageService) {

    this.privateKey = {
      erc20TokenList: [],
      xrpKeyPair: '',
      xrpAddress: '', xrpPrivateKey: '',
      bchAddress: '', bchPrivateKey: '',
      ltcAddress: '', ltcPrivateKey: '',
      mnemonic: '',
      btcAddress: '',
      btcPrivateKey: '',
      ethPrivateKey: '',
      ethAddress: '',
      password: ''
    };

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
    this.http.get(this.constant.walletToolBackendUrl + '/monitorPrice/coinPrice', {
      params: {
        symbol: 'bchusdt'
      }
    }).subscribe( res => {
      this.price = (res as any).result.close;
    });
  }

  getAddressInfo() {
    this.constant.showLoader();
    this.http.get(this.constant.walletBackendUrl + '/BCHTEST/address/' + this.privateKey.bchAddress).subscribe(res => {
      this.cryptoBchAddress = (res as any).payload;
    });
    this.http.get(this.constant.walletBackendUrl + '/BCHTEST/address/' + this.privateKey.bchAddress + '/transaction').subscribe( res => {
          this.cryptoBchTxList = res as any;
          // tslint:disable-next-line:prefer-for-of
          for (let i = 0; i < this.cryptoBchTxList.length; i++) {
            let inValue = 0;
            // tslint:disable-next-line:prefer-for-of
            for (let j = 0; j < this.cryptoBchTxList[i].txins.length; j++) {
              if (this.cryptoBchTxList[i].txins[j].addresses[0] === this.privateKey.bchAddress) {
                inValue = inValue + Number(this.cryptoBchTxList[i].txins[j].amount);
              }
            }
            let outValue = 0;
            // tslint:disable-next-line:prefer-for-of
            for (let k = 0; k < this.cryptoBchTxList[i].txouts.length; k++) {
              if (this.cryptoBchTxList[i].txouts[k].addresses[0] === this.privateKey.bchAddress) {
                outValue = outValue + Number(this.cryptoBchTxList[i].txouts[k].amount);
              }
            }
            this.cryptoBchTxList[i].value = outValue - inValue;
          }
          this.constant.hideLoader();
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
      {privateKeyInfo: JSON.stringify(privateKey), balance: this.cryptoBchAddress.balance, txList: JSON.stringify(this.cryptoBchTxList)}]);
  }

  toCoinDetail() {
    this.router.navigate(['coin-detail', {codeInfo: 'bitcoin-cash'}]);
  }

}
