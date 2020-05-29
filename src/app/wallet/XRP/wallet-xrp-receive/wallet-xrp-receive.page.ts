import { Component, OnInit } from '@angular/core';
import {PrivateKey} from '../../../entity/private-key';
import {ActivatedRoute, Router} from '@angular/router';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-wallet-xrp-receive',
  templateUrl: './wallet-xrp-receive.page.html',
  styleUrls: ['./wallet-xrp-receive.page.scss'],
})
export class WalletXrpReceivePage implements OnInit {

  privateKey: PrivateKey;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private clipboard: Clipboard,
              private toastController: ToastController) { }

  ngOnInit() {
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
  }

  async copyText() {

    const toast = await this.toastController.create({
      message: '地址已复制',
      duration: 2000
    });
    await toast.present();
    await this.clipboard.copy(this.privateKey.xrpAddress);
  }

}
