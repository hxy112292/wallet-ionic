import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../../service/constant.service';
import {ExchangeDetail} from '../../../../entity/exchange-detail';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {ModalController, ToastController} from '@ionic/angular';
import {ExchangeDescPage} from './exchange-desc/exchange-desc.page';
import {BrowserService} from '../../../../service/browser.service';
import {LoaderService} from '../../../../service/loader.service';

@Component({
  selector: 'app-exchange-detail',
  templateUrl: './exchange-detail.page.html',
  styleUrls: ['./exchange-detail.page.scss'],
})
export class ExchangeDetailPage implements OnInit {

  exchangeDetail: ExchangeDetail;
  exchangeCode: string;

  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private clipboard: Clipboard,
              private constant: ConstantService,
              private browserService: BrowserService,
              private loaderService: LoaderService,
              private toastController: ToastController,
              private modalController: ModalController) {
    this.exchangeDetail = {
      assets: '',
      redditlink: '',
      launchedtime: '',
      auth_kyc: '',
      country: '',
      desc: '',
      exrank: '',
      facebook_url: '',
      fee_url: '',
      labels: '',
      logo: '',
      official_url: '',
      pairnum: '',
      platform: '',
      platform_name: '',
      rank: '',
      twitter_url: '',
      volume_day_usd: ''
    };
  }

  ngOnInit() {
    this.exchangeCode = this.route.snapshot.paramMap.get('codeInfo');
    this.getExchangeDetail();
  }

  getExchangeDetail() {
    this.loaderService.showLoader();
    this.http.get(this.constant.walletBackendUrl + '/exchange/detail/', {
      params: {
        code: this.exchangeCode
      }
    }).subscribe(res => {
      this.exchangeDetail = (res as any).data;
      this.exchangeDetail.desc = this.exchangeDetail.desc.replace(/<[^>]*>/g, '');
      this.loaderService.hideLoader();
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getExchangeDetail();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  openUrl(url: string) {
    this.browserService.openBrowser(url);
  }

  async copyText(url) {

    const toast = await this.toastController.create({
      message: '网址已复制',
      duration: 2000
    });
    await toast.present();
    await this.clipboard.copy(url);
  }

  async toExchangeDesc() {
    const modal = await this.modalController.create({
      component: ExchangeDescPage,
      componentProps: {
        code: this.exchangeDetail.platform_name,
        desc: this.exchangeDetail.desc
      }
    });
    await modal.present();
    const data = ((await modal.onDidDismiss()) as any).data;
    if (data != null) {

    }
  }
}
