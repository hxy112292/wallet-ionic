import {Component, OnInit} from '@angular/core';
import {PrivateKey} from '../../../entity/private-key';
import {EtherscanTx} from '../../../entity/etherscan-tx';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {StorageService} from '../../../service/storage.service';
import {Erc20Token} from '../../../entity/erc20-token';
import {Contract, ethers} from 'ethers';

@Component({
  selector: 'app-wallet-erc20-center',
  templateUrl: './wallet-erc20-center.page.html',
  styleUrls: ['./wallet-erc20-center.page.scss'],
})
export class WalletErc20CenterPage implements OnInit {

  privateKey: PrivateKey;
  erc20Token: Erc20Token;
  erc20TxList: EtherscanTx[];
  tmpHashList: EtherscanTx[];
  price: number;
  erc20Balance: number;
  ethBalance: number;
  indexErc20: number;
  indexEth: number;

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

    this.erc20Token = {
      address: '', name: '', symbol: ''
    };

    this.price = 0;
  }

  ngOnInit() {
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
    this.erc20Token = JSON.parse(this.route.snapshot.paramMap.get('erc20TokenInfo'));
    this.indexErc20 = Number(this.route.snapshot.paramMap.get('indexErc20'));
    this.indexEth = Number(this.route.snapshot.paramMap.get('indexEth'));
    this.getETHAddressInfo();
    this.getErc20AddressInfo();
  }

  getETHAddressInfo() {
    this.http.get(this.constant.baseUrl + '/ETHTEST/address/' + this.privateKey.ethAddress).subscribe(res => {
      this.ethBalance = Number((res as any).result) / 1000000000000000000;
    });
  }

  getErc20AddressInfo() {
    this.constant.showLoader();
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

    const contract = new Contract(this.erc20Token.address, contractAbiFragment, provider);
    contract.balanceOf(this.privateKey.ethAddress).then( balance => {
      this.erc20Balance = (balance as any) / 1000000000000000000;
    });

    this.http.get(this.constant.baseUrl + '/ETHTEST/address/' + this.privateKey.ethAddress + '/tokentx', {
      params: {
        contractAddress: this.erc20Token.address
      }
    }).subscribe( res => {
      this.erc20TxList = (res as any).result;
      this.getTmpHash();
      this.constant.hideLoader();
    });
  }

  getTmpHash() {
    this.storage.get(this.privateKey.ethAddress + this.erc20Token.name).then( res => {
      if (res != null) {
        this.tmpHashList = res as any;
        for (let i = 0; i < this.tmpHashList.length; i++) {
          // tslint:disable-next-line:prefer-for-of
          for (let j = 0; j < this.erc20TxList.length; j++) {
            if (this.tmpHashList[i].hash === this.erc20TxList[j].hash) {
              this.tmpHashList.splice(i, 1);
              if (this.tmpHashList.length === 0 ) {
                break;
              }
            }
          }
        }
        this.storage.remove(this.privateKey.ethAddress + this.erc20Token.name);
        if (this.tmpHashList.length !== 0) {
          this.storage.set(this.privateKey.ethAddress + this.erc20Token.name, this.tmpHashList);
          this.erc20TxList = this.tmpHashList.concat(this.erc20TxList);
        }
      }
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
    this.router.navigate(['wallet-erc20-transaction', {transactionInfo: JSON.stringify(transaction)
      , erc20TokenInfo: JSON.stringify(erc20Token)}]);
  }

  toWalletErc20Receive(privateKey: PrivateKey, erc20Token: Erc20Token) {
    this.router.navigate(['wallet-erc20-receive', {privateKeyInfo: JSON.stringify(privateKey)
      , erc20TokenInfo: JSON.stringify(erc20Token)}]);
  }

  toWalletErc20Send(privateKey: PrivateKey) {
    this.router.navigate(['wallet-erc20-send', {privateKeyInfo: JSON.stringify(privateKey),
      erc20Balance: this.erc20Balance, ethBalance: this.ethBalance, erc20TokenInfo: JSON.stringify(this.erc20Token)}]);
  }

  toWalletManagement() {
    this.router.navigate(['wallet-erc20-manage', {indexErc20: this.indexErc20, indexEth: this.indexEth}]);
  }

  toWalletEthErc20Center() {
    this.router.navigate(['wallet-ethereum-erc20-center', {privateKeyInfo: JSON.stringify(this.privateKey)}]);
  }
}
