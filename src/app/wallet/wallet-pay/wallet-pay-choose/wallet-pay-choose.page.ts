import { Component, OnInit } from '@angular/core';
import {WalletContact} from '../../../entity/wallet-contact';
import {AlertController, ModalController, NavParams, ToastController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {ConstantService} from '../../../service/constant.service';
import {StorageService} from '../../../service/storage.service';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {WalletContactAddPage} from '../../wallet-contact/wallet-contact-add/wallet-contact-add.page';
import {WalletContactEditPage} from '../../wallet-contact/wallet-contact-edit/wallet-contact-edit.page';
import {PrivateKey} from '../../../entity/private-key';
import {PrivateKeyService} from '../../../service/private-key.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-wallet-pay-choose',
  templateUrl: './wallet-pay-choose.page.html',
  styleUrls: ['./wallet-pay-choose.page.scss'],
})
export class WalletPayChoosePage implements OnInit {

  privateKeyList: PrivateKey[];
  balanceList: number[];
  symbol: string;

  constructor(private alertController: AlertController,
              private constant: ConstantService,
              private http: HttpClient,
              private privateKeyService: PrivateKeyService,
              private toastController: ToastController,
              private modalController: ModalController,
              private navParams: NavParams) {
    this.privateKeyList = [];
    this.balanceList = [];
  }

  ngOnInit() {
    this.symbol = this.navParams.get('symbol');
    this.privateKeyList = this.privateKeyService.privateKeyList;
    this.getBalance();
  }

  dismiss(index) {
    let data = null;
    if (index !== null) {
      data = {privateKey: this.privateKeyList[index], balance: this.balanceList[index]};
    }
    this.modalController.dismiss(data).then(() => {

    });
  }

  getBalance() {
    for (let i = 0; i < this.privateKeyService.privateKeyListLength; i++) {
      let network;
      if (this.privateKeyList[i].ethAddress != null) {
        if (this.privateKeyList[i].network === 'testNet') {
          network = 'ETHTEST';
        } else {
          network = 'ETH';
        }
        this.http.get(this.constant.walletBackendUrl + '/' + network + '/address/' + this.privateKeyList[i].ethAddress).subscribe(res => {
          this.balanceList[i] = (res as any).result;
        });
      } else {
        this.balanceList[i] = 0;
      }
    }
  }

}
