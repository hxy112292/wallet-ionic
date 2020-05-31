import { Component, OnInit } from '@angular/core';
import {PrivateKey} from '../../../entity/private-key';
import {BlockchairEthAddress} from '../../../entity/blockchair-eth-address';
import {EtherscanBalance} from '../../../entity/etherscan-balance';
import {EtherscanTx} from '../../../entity/etherscan-tx';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../constant.service';
import {Storage} from '@ionic/storage';
import {Erc20Token} from '../../../entity/erc20-token';
import {Contract, ethers} from 'ethers';

@Component({
  selector: 'app-wallet-erc20-center',
  templateUrl: './wallet-erc20-center.page.html',
  styleUrls: ['./wallet-erc20-center.page.scss'],
})
export class WalletErc20CenterPage implements OnInit {

  privateKey: PrivateKey;
  blockChairAddress: BlockchairEthAddress;
  erc20Token: Erc20Token;
  erc20TxList: EtherscanTx[];
  price: number;
  erc20Balance: number;
  ethBalance: number;

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

    this.blockChairAddress = {
      balance: '',
      balance_usd: '',
      state: '',
      transactions: []
    };

    this.erc20Token = {
      address: '', name: '', symbol: ''
    };

    this.price = 0;
  }

  ngOnInit() {
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
    this.erc20Token = JSON.parse(this.route.snapshot.paramMap.get('erc20TokenInfo'));
    this.getETHAddressInfo();
    this.getErc20AddressInfo();
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
      this.ethBalance = Number((res as any).result) / 1000000000000000000;
    });
  }

  getErc20AddressInfo() {
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

    const contract = new Contract(this.erc20Token.address, contractAbiFragment, provider);
    contract.balanceOf(this.privateKey.ethAddress).then( balance => {
      this.erc20Balance = (balance as any) / 1000000000000000000;
    });

    this.http.get(this.constant.ropstenEtherScanUrl + '/api', {
      params: {
        module: 'account',
        action: 'tokentx',
        contractaddress: this.erc20Token.address,
        address: this.privateKey.ethAddress,
        sort: 'desc',
        apikey: this.constant.ropstenEtherScanKey
      }
    }).subscribe( res => {
      this.erc20TxList = (res as any).result;
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getETHAddressInfo();
    this.getErc20AddressInfo();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  toWalletErc20Transaction(transaction: EtherscanTx, erc20Token: Erc20Token) {
    this.router.navigate(['tabs/wallet/wallet-erc20-transaction', {transactionInfo: JSON.stringify(transaction)
      , erc20TokenInfo: JSON.stringify(erc20Token)}]);
  }

  toWalletErc20Receive(privateKey: PrivateKey, erc20Token: Erc20Token) {
    this.router.navigate(['tabs/wallet/wallet-erc20-receive', {privateKeyInfo: JSON.stringify(privateKey)
      , erc20TokenInfo: JSON.stringify(erc20Token)}]);
  }

  toWalletErc20Send(privateKey: PrivateKey) {
    this.router.navigate(['tabs/wallet/wallet-erc20-send', {privateKeyInfo: JSON.stringify(privateKey),
      erc20Balance: this.erc20Balance, ethBalance: this.ethBalance, erc20TokenInfo: JSON.stringify(this.erc20Token)}]);
  }

}
