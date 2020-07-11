import { Component, OnInit } from '@angular/core';
import {Erc20Token} from '../../../entity/erc20-token';
import {PrivateKey} from '../../../entity/private-key';
import {ActivatedRoute, Router} from '@angular/router';
import {Contract, ethers} from 'ethers';
import {ConstantService} from '../../../constant.service';

@Component({
  selector: 'app-wallet-erc20-search',
  templateUrl: './wallet-erc20-search.page.html',
  styleUrls: ['./wallet-erc20-search.page.scss'],
})
export class WalletErc20SearchPage implements OnInit {

  contractAddress: string;
  erc20Token: Erc20Token;
  privateKey: PrivateKey;
  index: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private constant: ConstantService) {
    this.contractAddress = '';
    this.erc20Token = {
      address: '', name: '', symbol: ''
    };

    this.index = 0;
  }

  ngOnInit() {
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
    this.index = Number(this.route.snapshot.paramMap.get('index'));
  }

  findToken() {
    const contractAbiFragment = [
      {
        name: 'symbol',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: 'symbol',
            type: 'string',
          },
        ],
        constant: true,
        payable: false,
      },
      {
        name: 'name',
        type: 'function',
        inputs: [],
        outputs: [
          {
            name: 'name',
            type: 'string',
          },
        ],
        constant: true,
        payable: false,
      }
    ];

    const provider = new ethers.providers.EtherscanProvider('ropsten');

    const contract = new Contract(this.contractAddress, contractAbiFragment, provider);

    contract.symbol().then( symbol => {
      this.erc20Token.symbol = symbol as any;
      this.erc20Token.address = this.contractAddress;
      contract.name().then( name => {
        this.erc20Token.name = name as any;
        this.router.navigate(['wallet-erc20-add', {privateKeyInfo: JSON.stringify(this.privateKey)
          , erc20Token: JSON.stringify(this.erc20Token), index: this.index}]);
      }).catch( error => {
        this.constant.alert(error);
        return;
      });
    }).catch( error => {
      this.constant.alert(error);
      return;
    });
  }

}
