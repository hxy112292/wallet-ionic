import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ConstantService} from '../constant.service';

@Component({
  selector: 'app-wallet-mnemonic-import',
  templateUrl: './wallet-mnemonic-import.page.html',
  styleUrls: ['./wallet-mnemonic-import.page.scss'],
})
export class WalletMnemonicImportPage implements OnInit {

  mnemonic: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private constant: ConstantService) {

    this.mnemonic = '';
  }

  ngOnInit() {
  }

  checkMnemonic() {
    this.router.navigate(['tabs/wallet/wallet-add', {mnemonicInfo: this.mnemonic}]);
  }

}
