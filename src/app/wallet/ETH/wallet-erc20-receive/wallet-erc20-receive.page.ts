import { Component, OnInit } from '@angular/core';
import {PrivateKey} from '../../../entity/private-key';
import {ActivatedRoute, Router} from '@angular/router';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {ToastController} from '@ionic/angular';
import {Erc20Token} from '../../../entity/erc20-token';

@Component({
  selector: 'app-wallet-erc20-receive',
  templateUrl: './wallet-erc20-receive.page.html',
  styleUrls: ['./wallet-erc20-receive.page.scss'],
})
export class WalletErc20ReceivePage implements OnInit {

  privateKey: PrivateKey;
  erc20Token: Erc20Token;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private clipboard: Clipboard,
              private toastController: ToastController) { }

  ngOnInit() {
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
    this.erc20Token = JSON.parse(this.route.snapshot.paramMap.get('erc20TokenInfo'));
  }

  async copyText() {

    const toast = await this.toastController.create({
      message: '地址已复制',
      duration: 2000
    });
    await toast.present();
    await this.clipboard.copy(this.privateKey.ethAddress);
  }

}
