import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {ConstantService} from '../../../service/constant.service';
import {AlertService} from '../../../service/alert.service';

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
              private alertService: AlertService) {

    this.mnemonicInput = '';
  }

  ngOnInit() {
    this.mnemonic = this.route.snapshot.paramMap.get('mnemonicInfo');
  }

  checkMnemonic() {
    if (this.mnemonicInput !== this.mnemonic) {
      this.alertService.alert('助记词错误！');
    } else {
      this.router.navigate(['wallet-add', {mnemonicInfo: this.mnemonic, network: this.route.snapshot.paramMap.get('network')}]);
    }
  }

}
