import {Component, OnInit} from '@angular/core';
import {CoinDetail} from '../../entity/coin-detail';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../service/constant.service';
import {ModalController, ToastController} from '@ionic/angular';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {CoinDescPage} from './coin-desc/coin-desc.page';

@Component({
  selector: 'app-coin-introduction',
  templateUrl: './coin-introduction.page.html',
  styleUrls: ['./coin-introduction.page.scss'],
})
export class CoinIntroductionPage implements OnInit {

  code: string;
  coinDetail: CoinDetail;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private constant: ConstantService,
              private modalController: ModalController,
              private clipboard: Clipboard,
              private toastController: ToastController) {

    this.coinDetail = {
      marketcap: '',
      price_cny: '',
      code: '',
      name: '',
      symbol: '',
      logo: '',
      // tslint:disable-next-line:variable-name
      change_percent: '',
      price: '',
      maxsupply: '',
      supply: '',
      // tslint:disable-next-line:variable-name
      marketcap_total_usd: '',
      rank: '',
      siteurl: '',
      // tslint:disable-next-line:variable-name
      online_time: '',
      // tslint:disable-next-line:variable-name
      white_paper: '',
      twitter: '',
      explorer: '',
      facebook: '',
      // tslint:disable-next-line:variable-name
      turn_over: '',
      prooftype: '',
      algorithm: '',
      redditlink: '',
      codelink: '',
      circulationRate: '',
      coindesc: ''
    };
  }

  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('codeInfo');
    this.getCoinDetail();
  }

  getCoinDetail() {
    this.constant.showLoader();
    this.http.get(this.constant.baseUrl + '/listingLatest/coinInfo', {
      params: {
        code: this.code
      }
    }).subscribe(res => {
      this.coinDetail = (res as any).data;
      this.coinDetail.siteurl = this.coinDetail.siteurl.split('\n')[0];
      this.coinDetail.explorer = this.coinDetail.explorer.split('\n')[0];
      this.coinDetail.coindesc = this.coinDetail.coindesc.replace(/<[^>]*>/g, '');
      this.coinDetail.coindesc = this.coinDetail.coindesc.replace('*以上内容由非小号官方整理，如若转载，请注明出处。', '');
      this.constant.hideLoader();
    });
  }

  openUrl(url: string) {
    this.constant.openBrowser(url);
  }

  async toCoinDesc() {
    const modal = await this.modalController.create({
      component: CoinDescPage,
      componentProps: {
        code: this.code,
        coindesc: this.coinDetail.coindesc
      }
    });
    await modal.present();
    const data = ((await modal.onDidDismiss()) as any).data;
    if (data != null) {

    }
  }

  async copyText(url) {

    const toast = await this.toastController.create({
      message: '网址已复制',
      duration: 2000
    });
    await toast.present();
    await this.clipboard.copy(url);
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getCoinDetail();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
