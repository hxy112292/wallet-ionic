import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../constant.service';
import {Router} from '@angular/router';
import {Exchange} from '../../../entity/exchange';
import {CoinDetail} from '../../../entity/coin-detail';
import {GlobalInfo} from '../../../entity/global-info';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.page.html',
  styleUrls: ['./exchange.page.scss'],
})
export class ExchangePage implements OnInit {

  exchangeList: Exchange[];
  assetsOnSite: number;
  exchangeRate: CoinDetail;
  globalInfo: GlobalInfo;

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private router: Router) {

    this.assetsOnSite = 0;
    this.exchangeRate = {
      marketcap: '',
      price_cny: '',
      algorithm: '',
      change_percent: '',
      circulationRate: '',
      code: '',
      codelink: '',
      coindesc: '',
      explorer: '',
      facebook: '',
      logo: '',
      marketcap_total_usd: '',
      maxsupply: '',
      name: '',
      online_time: '',
      price: '',
      prooftype: '',
      rank: '',
      redditlink: '',
      siteurl: '',
      supply: '',
      symbol: '',
      turn_over: '',
      twitter: '',
      white_paper: ''
    };

    this.globalInfo = {
      codetotal: '',
      dappcount: '',
      exchangerate: '',
      exchangetotal: '',
      fallnum: '',
      marketcapvol: '',
      offmarketprice: '',
      risenum: '',
      tokentotal: '',
      usdt_price_cny: '',
      vol24h: '',
      walletcount: '',
      websitecount: ''

    };
  }

  ngOnInit() {

    this.getExchangeInfo();
  }

  getExchangeInfo() {
    this.http.get(this.constant.baseUrl + '/exchange').subscribe(res => {
      this.exchangeList = (res as any).data;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.exchangeList.length; i++) {
        this.assetsOnSite += Number(this.exchangeList[i].assets_usd);
      }
      this.http.get(this.constant.baseUrl + '/listingLatest/coinInfo', {
        params: {
          code: 'tether'
        }}).subscribe( res1 => {
         this.exchangeRate = (res1 as any).data;
         this.http.get(this.constant.baseUrl + '/listingLatest/globalInfo').subscribe( res2 => {
          this.globalInfo = (res2 as any).data;
        });
      });
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.assetsOnSite = 0;
    this.getExchangeInfo();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  toExchangeDetail(code) {
    this.router.navigate(['exchange-detail', {codeInfo: code}] );
  }
}
