import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {PrivateKey} from '../../../entity/private-key';

@Component({
  selector: 'app-wallet-export-key',
  templateUrl: './wallet-export-key.page.html',
  styleUrls: ['./wallet-export-key.page.scss'],
})
export class WalletExportKeyPage implements OnInit {

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
