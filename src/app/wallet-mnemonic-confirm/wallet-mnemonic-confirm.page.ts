import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {ConstantService} from '../constant.service';

@Component({
  selector: 'app-wallet-mnemonic-confirm',
  templateUrl: './wallet-mnemonic-confirm.page.html',
  styleUrls: ['./wallet-mnemonic-confirm.page.scss'],
})
export class WalletMnemonicConfirmPage implements OnInit {

  mnemonic: string;
  mnemonicInput: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private constant: ConstantService) {

    this.mnemonicInput = '';
  }

  ngOnInit() {
    this.mnemonic = this.route.snapshot.paramMap.get('mnemonicInfo');
  }

  checkMnemonic() {
    if (this.mnemonicInput !== this.mnemonic) {
      this.constant.alert('助记词错误！');
    } else {
      this.router.navigate(['tabs/wallet/wallet-add', {mnemonicInfo: this.mnemonic}]);
    }
  }

}
