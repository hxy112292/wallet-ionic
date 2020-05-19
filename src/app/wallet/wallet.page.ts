import { Component, OnInit } from '@angular/core';
import {CoinDescPage} from '../coin-detail/coin-desc/coin-desc.page';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {ConstantService} from '../constant.service';
import {ModalController} from '@ionic/angular';
import {AddWalletPage} from './add-wallet/add-wallet.page';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private constant: ConstantService,
              private modalController: ModalController) { }

  ngOnInit() {
  }

  async toAddWallet() {
    const modal = await this.modalController.create({
      component: AddWalletPage,
      componentProps: {
      }
    });
    await modal.present();
    const data = ((await modal.onDidDismiss()) as any).data;
    if (data != null) {

    }
  }
}
