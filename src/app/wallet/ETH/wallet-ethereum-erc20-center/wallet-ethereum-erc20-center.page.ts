import {Component, OnInit} from '@angular/core';
import {PrivateKey} from '../../../entity/private-key';
import {EtherscanBalance} from '../../../entity/etherscan-balance';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../constant.service';
import {Storage} from '@ionic/storage';
import {Contract, ethers} from 'ethers';

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
              private storage: Storage) {

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
    this.http.get(this.constant.ropstenEtherScanUrl + '/api', {
      params: {
        module: 'account',
        action: 'balance',
        address: this.privateKey.ethAddress,
        apiKey: this.constant.ropstenEtherScanKey,
        tag: 'latest'
      }
    }).subscribe(res => {
      this.etherscanBalance = res as any;
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

    const provider = new ethers.providers.EtherscanProvider('ropsten');

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.privateKey.erc20TokenList.length; i++) {
      const contract = new Contract(this.privateKey.erc20TokenList[i].address, contractAbiFragment, provider);
      contract.balanceOf(this.privateKey.ethAddress).then( balance => {
        this.erc20BalanceList[i] = (balance as any) / 1000000000000000000;
      });
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
    this.router.navigate(['tabs/wallet/wallet-erc20-search', {privateKeyInfo: JSON.stringify(this.privateKey),
      index: this.index}]);
  }

  toEthCenter() {
    this.router.navigate(['tabs/wallet/wallet-ethereum-center', {privateKeyInfo : JSON.stringify(this.privateKey)}]);
  }
}
