import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-wallet-private-key-import',
  templateUrl: './wallet-private-key-import.page.html',
  styleUrls: ['./wallet-private-key-import.page.scss'],
})
export class WalletPrivateKeyImportPage implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private router: Router) {
  }

  ngOnInit() {

  }

  toBTCImport() {
    this.router.navigate(['wallet-btc-import', {network: this.route.snapshot.paramMap.get('network')}]);
  }

  toETHImport() {
    this.router.navigate(['wallet-eth-import', {network: this.route.snapshot.paramMap.get('network')}]);
  }

  toLTCImport() {
    this.router.navigate(['wallet-ltc-import', {network: this.route.snapshot.paramMap.get('network')}]);
  }

  toBCHImport() {
    this.router.navigate(['wallet-bch-import', {network: this.route.snapshot.paramMap.get('network')}]);
  }

  toXRPImport() {
    this.router.navigate(['wallet-xrp-import', {network: this.route.snapshot.paramMap.get('network')}]);
  }
}
