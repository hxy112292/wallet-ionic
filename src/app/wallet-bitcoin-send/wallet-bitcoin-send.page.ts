import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PrivateKey} from '../entity/private-key';

@Component({
  selector: 'app-wallet-bitcoin-send',
  templateUrl: './wallet-bitcoin-send.page.html',
  styleUrls: ['./wallet-bitcoin-send.page.scss'],
})
export class WalletBitcoinSendPage implements OnInit {

  privateKey: PrivateKey;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
  }

}
