import {Component, OnInit} from '@angular/core';
import {PrivateKey} from '../../../entity/private-key';
import {EtherscanBalance} from '../../../entity/etherscan-balance';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {StorageService} from '../../../service/storage.service';
import {Contract, ethers} from 'ethers';
import {Erc20Token} from '../../../entity/erc20-token';

@Component({
  selector: 'app-wallet-ethereum-erc20-center',
  templateUrl: './wallet-ethereum-erc20-center.page.html',
  styleUrls: ['./wallet-ethereum-erc20-center.page.scss'],
})
export class WalletEthereumErc20CenterPage implements OnInit {

  privateKey: PrivateKey;
  etherscanBalance: EtherscanBalance;
  erc20BalanceList: number[];
  index: number;

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

    this.etherscanBalance = {
      status: '',
      message: '',
      result: '',
      txList: []
    };

    this.index = 0;
    this.erc20BalanceList = [];
  }

  ngOnInit() {
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
    this.index = Number(this.route.snapshot.paramMap.get('index'));
    this.getETHAddressInfo();
    this.getERCAddressInfo();
  }

  getETHAddressInfo() {
    this.constant.showLoader();
    this.http.get(this.constant.walletBackendUrl + '/ETHTEST/address/' + this.privateKey.ethAddress).subscribe(res => {
      this.etherscanBalance = res as any;
      this.constant.hideLoader();
    });
  }

  getERCAddressInfo() {
    const contractAbiFragment = [
      {
        name: 'balanceOf',
        type: 'function',
        inputs: [
          {
            name: '_owner',
            type: 'address'
          }
        ],
        outputs: [
          {
            name: 'balance',
            type: 'uint256',
          },
        ],
        constant: true,
        payable: false,
      }
    ];

    const provider = ethers.getDefaultProvider('ropsten');

    if (this.privateKey.erc20TokenList != null) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.privateKey.erc20TokenList.length; i++) {
        const contract = new Contract(this.privateKey.erc20TokenList[i].address, contractAbiFragment, provider);
        contract.balanceOf(this.privateKey.ethAddress).then( balance => {
          this.erc20BalanceList[i] = (balance as any) / 1000000000000000000;
        });
      }
    }
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getETHAddressInfo();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  toERC20Add() {
    this.router.navigate(['wallet-erc20-search', {privateKeyInfo: JSON.stringify(this.privateKey),
      index: this.index}]);
  }

  toEthCenter() {
    this.router.navigate(['wallet-ethereum-center', {privateKeyInfo : JSON.stringify(this.privateKey)}]);
  }

  toErc20Center(erc20Token: Erc20Token, i) {
    this.router.navigate(['wallet-erc20-center', {privateKeyInfo : JSON.stringify(this.privateKey)
      , erc20TokenInfo: JSON.stringify(erc20Token), indexErc20: i, indexEth: this.index}]);
  }

  toWallet() {
    this.router.navigate(['tabs/wallet']);
  }
}
