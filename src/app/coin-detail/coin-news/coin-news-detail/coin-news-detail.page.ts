import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LoaderService} from '../../../service/loader.service';
import {ConstantService} from '../../../service/constant.service';
import {CoinNews} from '../../../entity/coin-news';

@Component({
  selector: 'app-coin-news-detail',
  templateUrl: './coin-news-detail.page.html',
  styleUrls: ['./coin-news-detail.page.scss'],
})
export class CoinNewsDetailPage implements OnInit {

  coinNews: CoinNews;
  coinNewsDetail: string;
  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private loaderService: LoaderService,
              private constant: ConstantService) {
    this.coinNews = new CoinNews();

    this.coinNewsDetail = '';
  }

  ngOnInit() {
    this.coinNews = JSON.parse(this.route.snapshot.paramMap.get('coinNews'));
    this.getCoinNewsDetail();
  }

  getCoinNewsDetail() {
    this.loaderService.showLoader();
    this.http.get(this.constant.walletToolBackendUrl + '/liveNews/deep/detail', {
      params: {
        url: this.coinNews.url
      }
    }).subscribe(res => {
      this.coinNewsDetail = (res as any).result;
      this.loaderService.hideLoader();
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getCoinNewsDetail();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
