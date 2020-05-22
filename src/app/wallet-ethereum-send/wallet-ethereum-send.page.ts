import { Component, OnInit } from '@angular/core';
import {PrivateKey} from '../entity/private-key';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-wallet-ethereum-send',
  templateUrl: './wallet-ethereum-send.page.html',
  styleUrls: ['./wallet-ethereum-send.page.scss'],
})
export class WalletEthereumSendPage implements OnInit {

  privateKey: PrivateKey;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
  }
}
