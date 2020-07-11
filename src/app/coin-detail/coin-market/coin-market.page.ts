import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {ConstantService} from '../../constant.service';
import {ModalController, ToastController} from '@ionic/angular';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {CoinMarket} from '../../entity/coin-market';

@Component({
  selector: 'app-coin-market',
  templateUrl: './coin-market.page.html',
  styleUrls: ['./coin-market.page.scss'],
})
export class CoinMarketPage implements OnInit {

  code: string;
  coinMarketList: CoinMarket[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private inAppBrowser: InAppBrowser,
              private constant: ConstantService,
              private modalController: ModalController,
              private clipboard: Clipboard,
              private toastController: ToastController) {

    this.coinMarketList = [];
  }

  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('codeInfo');
    this.getCoinMarket();
  }

  getCoinMarket() {
    this.http.get(this.constant.baseUrl + '/listingLatest/coinMarket', {
      params: {
        code: this.code
      }
    }).subscribe( res => {
        this.coinMarketList = (res as any).data;
    });
  }

}
