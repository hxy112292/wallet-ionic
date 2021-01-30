import { Component, OnInit } from '@angular/core';
import {CoinFlow} from '../../entity/coin-flow';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LoaderService} from '../../service/loader.service';
import {ConstantService} from '../../service/constant.service';
import {ToastController} from '@ionic/angular';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {CoinNews} from '../../entity/coin-news';

@Component({
  selector: 'app-coin-news',
  templateUrl: './coin-news.page.html',
  styleUrls: ['./coin-news.page.scss'],
})
export class CoinNewsPage implements OnInit {

  code: string;
  coinNewsList: CoinNews[];
  page: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private loaderService: LoaderService,
              private constant: ConstantService,
              private toastController: ToastController,
              private clipboard: Clipboard) {
    this.code = '';
    this.coinNewsList = [];
    this.page = 1;
  }

  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('codeInfo');
    this.getNews();
  }

  getNews() {
    this.loaderService.showLoader();
    this.http.get(this.constant.walletToolBackendUrl + '/listingLatest/news', {
      params: {
        code: this.code,
        page: this.page + ''
      }
    }).subscribe( res => {
      this.coinNewsList = this.coinNewsList.concat(res as any);
      this.loaderService.hideLoader();
    });
  }

  loadMore(event) {
    console.log('Begin async operation');
    this.page += 1;
    this.getNews();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  toCoinNewsDetail(data) {
    this.router.navigate(['coin-news-detail', {coinNews: JSON.stringify(data)}]);
  }
}
