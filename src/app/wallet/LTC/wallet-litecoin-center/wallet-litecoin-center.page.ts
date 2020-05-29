import {Component, OnInit} from '@angular/core';
import {PrivateKey} from '../../../entity/private-key';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../constant.service';
import {Storage} from '@ionic/storage';
import {SochainLtcAddress} from '../../../entity/sochain-ltc-address';

@Component({
  selector: 'app-wallet-litecoin-center',
  templateUrl: './wallet-litecoin-center.page.html',
  styleUrls: ['./wallet-litecoin-center.page.scss'],
})
export class WalletLitecoinCenterPage implements OnInit {

  privateKey: PrivateKey;
  sochainLtcAddress: SochainLtcAddress;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private constant: ConstantService,
              private storage: Storage) {

    this.privateKey = {
      xrpKeyPair: '',
      xrpAddress: '', xrpPrivateKey: '',
      bchAddress: '', bchPrivateKey: '',
      ltcAddress: '', ltcPrivateKey: '',
      mnemonic: '',
      btcAddress: this.constant.testBTCAddress,
      btcPrivateKey: '',
      ethPrivateKey: '',
      ethAddress: '',
      password: ''
    };

    this.sochainLtcAddress = {
      value_usd: 0,
      address: '', balance: '', txs: []
    };
  }

  ngOnInit() {
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
    this.getAddressInfo();
  }

  getAddressInfo() {
    this.http.get(this.constant.baseUrl + '/LTCTEST/address/' + this.privateKey.ltcAddress).subscribe(res => {
      this.sochainLtcAddress = (res as any).data;
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
    this.router.navigate(['tabs/wallet/wallet-litecoin-transaction', {transaction: hash}]);
  }

  toWalletLitecoinReceive(privateKey: PrivateKey) {
    this.router.navigate(['tabs/wallet/wallet-litecoin-receive', {privateKeyInfo: JSON.stringify(privateKey)}]);
  }

  toWalletLitecoinSend(privateKey: PrivateKey) {
    this.router.navigate(['tabs/wallet/wallet-litecoin-send',
      {privateKeyInfo: JSON.stringify(privateKey), balance: this.sochainLtcAddress.balance}]);
  }

  toCoinDetail() {
    this.router.navigate(['tabs/wallet/coin-detail', {codeInfo: 'litecoin'}]);
  }

}
