import { Component, OnInit } from '@angular/core';
import {PrivateKey} from '../../../entity/private-key';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-wallet-export-mnemonic',
  templateUrl: './wallet-export-mnemonic.page.html',
  styleUrls: ['./wallet-export-mnemonic.page.scss'],
})
export class WalletExportMnemonicPage implements OnInit {

  privateKey: PrivateKey;

  constructor(private modalController: ModalController,
              private navParams: NavParams) { }

  ngOnInit() {
    this.privateKey = this.navParams.get('privateKey');
  }

  dismiss(data) {
    this.modalController.dismiss(data).then(() => {

    });
  }

}
