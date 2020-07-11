import { Component, OnInit } from '@angular/core';
import {Erc20Token} from '../../../entity/erc20-token';
import {PrivateKey} from '../../../entity/private-key';
import {ActivatedRoute, Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {ConstantService} from '../../../constant.service';

@Component({
  selector: 'app-wallet-erc20-add',
  templateUrl: './wallet-erc20-add.page.html',
  styleUrls: ['./wallet-erc20-add.page.scss'],
})
export class WalletErc20AddPage implements OnInit {

  contractAddress: string;
  erc20Token: Erc20Token;
  privateKey: PrivateKey;
  privateKeyList: PrivateKey[];
  index: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private storage: Storage,
              private constant: ConstantService) {
    this.contractAddress = '';
    this.privateKeyList = [];
    this.index = 0;
  }

  ngOnInit() {
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
    this.erc20Token = JSON.parse(this.route.snapshot.paramMap.get('erc20Token'));
    this.index = Number(this.route.snapshot.paramMap.get('index'));
  }

  addToken() {
    if (this.privateKey.erc20TokenList != null && this.privateKey.erc20TokenList.length !== 0) {
      this.constant.privateKeyList[this.index].erc20TokenList[this.privateKey.erc20TokenList.length] = this.erc20Token;
    } else {
      this.constant.privateKeyList[this.index].erc20TokenList = [];
      this.constant.privateKeyList[this.index].erc20TokenList[0] = this.erc20Token;
    }
    this.storage.set('privateKeyList', this.constant.privateKeyList);
    this.router.navigate(['wallet-ethereum-erc20-center'
      , {privateKeyInfo: JSON.stringify(this.constant.privateKeyList[this.index])}]);
  }
}
