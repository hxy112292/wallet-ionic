import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wallet-add-choose',
  templateUrl: './wallet-add-choose.page.html',
  styleUrls: ['./wallet-add-choose.page.scss'],
})
export class WalletAddChoosePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toImportWallet() {
    this.router.navigate(['wallet-mnemonic-import']);
  }

  toGenerateWallet() {
    this.router.navigate(['wallet-mnemonic-generate']);
  }

}
