import {Component, OnInit} from '@angular/core';
import {CoinDetail} from '../../entity/coin-detail';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../service/constant.service';
import {ModalController, ToastController} from '@ionic/angular';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {CoinDescPage} from './coin-desc/coin-desc.page';
import {BrowserService} from '../../service/browser.service';
import {LoaderService} from '../../service/loader.service';
import {Concept} from '../../entity/concept';
import {GlobalInfo} from '../../entity/global-info';

@Component({
  selector: 'app-coin-introduction',
  templateUrl: './coin-introduction.page.html',
  styleUrls: ['./coin-introduction.page.scss'],
})
export class CoinIntroductionPage implements OnInit {

  code: string;
  coinDetail: CoinDetail;
  globalInfo: GlobalInfo;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private constant: ConstantService,
              private browserService: BrowserService,
              private modalController: ModalController,
              private loaderService: LoaderService,
              private clipboard: Clipboard,
              private toastController: ToastController) {

    this.coinDetail = new CoinDetail();
    this.globalInfo = new GlobalInfo();
  }

  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('codeInfo');
    this.getCoinDetail();
    this.getGlobalInfo();
  }

  getCoinDetail() {
    this.loaderService.showLoader();
    this.http.get(this.constant.walletBackendUrl + '/listingLatest/coinInfo', {
      params: {
        code: this.code
      }
    }).subscribe(res => {
      this.coinDetail = (res as any).data;
      this.coinDetail.siteurl = this.coinDetail.siteurl.split('\n')[0];
      this.coinDetail.explorer = this.coinDetail.explorer.split('\n')[0];
      this.coinDetail.coindesc = this.coinDetail.coindesc.replace(/<[^>]*>/g, '');
      this.coinDetail.coindesc = this.coinDetail.coindesc.replace('*以上内容由非小号官方整理，如若转载，请注明出处。', '');
      this.loaderService.hideLoader();
    });
  }

  getGlobalInfo() {
    this.http.get(this.constant.walletBackendUrl + '/listingLatest/globalInfo').subscribe( res => {
      this.globalInfo = (res as any).data;
    });
  }

  openUrl(url: string) {
    this.browserService.openBrowser(url);
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

  toConcept(data) {
    const concept = new Concept();
    concept.id = data.concert_id;
    concept.name = data.concert_name;
    this.router.navigate(['concept-detail', {conceptInfo: JSON.stringify(concept)}]);
  }
}
