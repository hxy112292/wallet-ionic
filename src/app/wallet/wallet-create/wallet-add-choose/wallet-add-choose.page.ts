import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wallet-add-choose',
  templateUrl: './wallet-add-choose.page.html',
  styleUrls: ['./wallet-add-choose.page.scss'],
})
export class WalletAddChoosePage implements OnInit {

  network: string;

  constructor(private router: Router) {
    this.network = 'mainNet';
  }

  ngOnInit() {
  }

  toImportWallet() {
    this.router.navigate(['wallet-mnemonic-import', {network: this.network}]);
  }

  toGenerateWallet() {
    this.router.navigate(['wallet-mnemonic-generate', {network: this.network}]);
  }

  toImportPrivateKey() {
    this.router.navigate(['wallet-private-key-import', {network: this.network}]);
  }

}
