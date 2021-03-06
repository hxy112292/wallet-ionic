import {Component, OnInit} from '@angular/core';
import {PrivateKey} from '../../../entity/private-key';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {EtherscanBalance} from '../../../entity/etherscan-balance';
import {EtherscanTx} from '../../../entity/etherscan-tx';
import {StorageService} from '../../../service/storage.service';
import {LoaderService} from '../../../service/loader.service';

@Component({
  selector: 'app-wallet-ethereum-center',
  templateUrl: './wallet-ethereum-center.page.html',
  styleUrls: ['./wallet-ethereum-center.page.scss'],
})
export class WalletEthereumCenterPage implements OnInit {

  privateKey: PrivateKey;
  etherscanBalance: EtherscanBalance;
  tmpHashList: EtherscanTx[];
  price: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private constant: ConstantService,
              private loaderService: LoaderService,
              private storage: StorageService) {

    this.privateKey = new PrivateKey();

    this.etherscanBalance = {
      status: '',
      message: '',
      result: '',
      txList: []
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
        symbol: 'ethusdt'
      }
    }).subscribe( res => {
      this.price = (res as any).result.close;
    });
  }

  getAddressInfo() {
    this.loaderService.showLoader();
    let network;
    if (this.privateKey.network === 'testNet') {
      network = 'ETHTEST';
    } else {
      network = 'ETH';
    }
    this.http.get(this.constant.walletBackendUrl + '/' + network + '/address/' + this.privateKey.ethAddress).subscribe(res => {
        this.etherscanBalance = res as any;
    });
    this.http.get(this.constant.walletBackendUrl + '/' + network + '/address/' + this.privateKey.ethAddress + '/transaction')
        .subscribe( res2 => {
      this.etherscanBalance.txList = (res2 as any).result;
      this.getTmpHash();
      this.loaderService.hideLoader();
    });
  }

  getTmpHash() {
    this.storage.get(this.privateKey.ethAddress).then( res => {
      if (res != null) {
        this.tmpHashList = res as any;
        for (let i = 0; i < this.tmpHashList.length; i++) {
          // tslint:disable-next-line:prefer-for-of
          for (let j = 0; j < this.etherscanBalance.txList.length; j++) {
            if (this.tmpHashList[i].hash === this.etherscanBalance.txList[j].hash) {
              this.tmpHashList.splice(i, 1);
              if (this.tmpHashList.length === 0 ) {
                break;
              }
            }
          }
        }
        this.storage.remove(this.privateKey.ethAddress);
        if (this.tmpHashList.length !== 0) {
          this.storage.set(this.privateKey.ethAddress, this.tmpHashList);
          this.etherscanBalance.txList = this.tmpHashList.concat(this.etherscanBalance.txList);
        }
      }
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

  toWalletEthereumTransaction(transaction: EtherscanTx) {
    this.router.navigate(['wallet-ethereum-transaction', {transactionInfo: JSON.stringify(transaction), privateKeyInfo: JSON.stringify(this.privateKey)}]);
  }

  toWalletEthereumReceive(privateKey: PrivateKey) {
    this.router.navigate(['wallet-ethereum-receive', {privateKeyInfo: JSON.stringify(privateKey)}]);
  }

  toWalletEthereumSend(privateKey: PrivateKey) {
    this.router.navigate(['wallet-ethereum-send', {privateKeyInfo: JSON.stringify(privateKey),
      balance: this.etherscanBalance.result}]);
  }

  toCoinDetail() {
    this.router.navigate(['coin-detail', {codeInfo: 'ethereum'}]);
  }
}
