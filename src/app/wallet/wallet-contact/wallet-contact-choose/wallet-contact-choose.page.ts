import { Component, OnInit } from '@angular/core';
import {WalletContact} from '../../../entity/wallet-contact';
import {AlertController, ModalController, ToastController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {ConstantService} from '../../../constant.service';
import {Storage} from '@ionic/storage';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {WalletContactAddPage} from '../wallet-contact-add/wallet-contact-add.page';
import {WalletContactEditPage} from '../wallet-contact-edit/wallet-contact-edit.page';

@Component({
  selector: 'app-wallet-contact-choose',
  templateUrl: './wallet-contact-choose.page.html',
  styleUrls: ['./wallet-contact-choose.page.scss'],
})
export class WalletContactChoosePage implements OnInit {

  walletContactList: WalletContact[];
  symbol: string;

  constructor(private alertController: AlertController,
              private route: ActivatedRoute,
              private router: Router,
              private constant: ConstantService,
              private storage: Storage,
              private clipboard: Clipboard,
              private toastController: ToastController,
              private modalController: ModalController) {
    this.walletContactList = [];
  }

  ngOnInit() {
    this.getWalletContactList();
  }

  getWalletContactList() {
    this.storage.get('walletContactList').then( res => {
      this.walletContactList = res as any;
    });
  }

  async toAddWalletContact() {
    const modal = await this.modalController.create({
      component: WalletContactAddPage,
      componentProps: {
        walletContactList: this.walletContactList
      }
    });
    await modal.present();
    const data = ((await modal.onDidDismiss()) as any).data;
    if (data != null) {

    }
    this.getWalletContactList();
  }

  async toEditWalletContact(i: number) {
    const modal = await this.modalController.create({
      component: WalletContactEditPage,
      componentProps: {
        walletContactList: this.walletContactList,
        index: i
      }
    });
    await modal.present();
    const data = ((await modal.onDidDismiss()) as any).data;
    if (data != null) {

    }
    this.getWalletContactList();
  }

  async deleteWalletContact(index) {
    const alert = await this.alertController.create({
      header: '警告',
      message: '<strong>您确定要删除这个地址吗？\n</strong>',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: '确定',
          handler: () => {
            this.walletContactList.splice(index, 1);
            this.storage.set('walletContactList', this.walletContactList);
          }
        }
      ]
    });
    await alert.present();
  }

  async copyText(address) {

    const toast = await this.toastController.create({
      message: '地址已复制',
      duration: 2000
    });
    await toast.present();
    await this.clipboard.copy(address);
  }

  dismiss(data) {
    this.modalController.dismiss(data).then(() => {

    });
  }

}
