import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ConstantService} from '../../../service/constant.service';
import {StorageService} from '../../../service/storage.service';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {ModalController, NavParams, ToastController} from '@ionic/angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {WalletContact} from '../../../entity/wallet-contact';
import {AlertService} from '../../../service/alert.service';

@Component({
  selector: 'app-wallet-contact-add',
  templateUrl: './wallet-contact-add.page.html',
  styleUrls: ['./wallet-contact-add.page.scss'],
})
export class WalletContactAddPage implements OnInit {

  walletContact: WalletContact;
  walletContactList: WalletContact[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private alertService: AlertService,
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
  }

  ngOnInit() {
    this.walletContactList = this.navParams.get('walletContactList');
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
      this.alertService.alert('请选择一个币种！');
      return;
    }
    if (this.walletContact.address == null || this.walletContact.address === '') {
      this.alertService.alert('地址不能为空');
      return;
    }
    if (this.walletContact.note  == null || this.walletContact.note === '') {
      this.alertService.alert('备注不能为空');
      return;
    }
    if (this.walletContact.note.length > 25) {
      this.alertService.alert('备注不能超过25个字');
      return;
    }

    if (this.walletContactList == null) {
      this.walletContactList = [];
      this.walletContactList[0] = this.walletContact;
    } else {
      this.walletContactList[this.walletContactList.length] = this.walletContact;
    }
    this.storage.set('walletContactList', this.walletContactList);
    this.dismiss(null);
  }

  dismiss(data) {
    this.modalController.dismiss(data).then(() => {

    });
  }
}
