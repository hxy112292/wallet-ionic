import { Component, OnInit } from '@angular/core';
import {WalletContact} from '../../../entity/wallet-contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ConstantService} from '../../../service/constant.service';
import {StorageService} from '../../../service/storage.service';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {ModalController, NavParams, ToastController} from '@ionic/angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-wallet-contact-edit',
  templateUrl: './wallet-contact-edit.page.html',
  styleUrls: ['./wallet-contact-edit.page.scss'],
})
export class WalletContactEditPage implements OnInit {

  walletContact: WalletContact;
  walletContactList: WalletContact[];
  index: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private constant: ConstantService,
              private storage: StorageService,
              private clipboard: Clipboard,
              private modalController: ModalController,
              private toastController: ToastController,
              private barcodeScanner: BarcodeScanner,
              private navParams: NavParams) {

    this.walletContact = {
      address: '',
      note: '',
      symbol: ''
    };

    this.walletContactList = [];

    this.index = 0;
  }

  ngOnInit() {
    this.walletContactList = this.navParams.get('walletContactList');
    this.index = this.navParams.get('index');
    this.walletContact = this.walletContactList[this.index];
  }

  qrScan() {
    this.barcodeScanner
        .scan()
        .then(barcodeData => {
          this.walletContact.address = barcodeData.text;
        })
        .catch(err => {
          console.log('Error', err);
        });
  }

  paste() {
    this.clipboard.paste().then((resolve: string) => {
      this.walletContact.address = resolve;
    });
  }

  addWalletContact() {

    if (this.walletContact.symbol == null || this.walletContact.symbol === '') {
      this.constant.alert('请选择一个币种！');
      return;
    }
    if (this.walletContact.address == null || this.walletContact.address === '') {
      this.constant.alert('地址不能为空');
      return;
    }
    if (this.walletContact.note  == null || this.walletContact.note === '') {
      this.constant.alert('备注不能为空');
      return;
    }
    if (this.walletContact.note.length > 25) {
      this.constant.alert('备注不能超过25个字');
      return;
    }

    this.walletContactList[this.index] = this.walletContact;
    this.storage.set('walletContactList', this.walletContactList);
    this.dismiss(null);
  }

  dismiss(data) {
    this.modalController.dismiss(data).then(() => {

    });
  }

}
