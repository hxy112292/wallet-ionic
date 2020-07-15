import {Component, OnInit, ViewChild} from '@angular/core';
import {Exchange} from '../../../entity/exchange';
import {CoinDetail} from '../../../entity/coin-detail';
import {GlobalInfo} from '../../../entity/global-info';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../constant.service';
import {Router} from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-market-statistics',
  templateUrl: './market-statistics.page.html',
  styleUrls: ['./market-statistics.page.scss'],
})
export class MarketStatisticsPage implements OnInit {

  // @ts-ignore
  @ViewChild('assetChart') assetChart;

  // @ts-ignore
  @ViewChild('exchangeChart') exchangeChart;

  exchangeList: Exchange[];
  assetsOnSite: number;
  assetsOnOut: number;
  exchangeRate: CoinDetail;
  globalInfo: GlobalInfo;
  private assetPies: Chart;
  private exchangePies: Chart;

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

  createAssetPie() {
    this.assetPies = new Chart(this.assetChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['场内资产', '场外资产'],
        datasets: [{
          label: '亿美元',
          data: [this.assetsOnSite, this.assetsOnOut],
          backgroundColor: [
            'rgba(255, 196, 9, 0.8)',
            'rgba(56, 128, 255, 0.8)'
          ]
        }]
      }
    });
  }

  createExchangePie() {
    this.exchangePies = new Chart(this.exchangeChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['上涨数', '下跌数'],
        datasets: [{
          label: '币种个数',
          data: [this.globalInfo.risenum, this.globalInfo.fallnum],
          backgroundColor: [
            'rgba(45, 211, 111, 0.8)',
            'rgba(235, 68, 90, 0.8)'
          ]
        }]
      }
    });
  }

  getExchangeInfo() {
    this.constant.showLoader();
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
          this.assetsOnOut = Number(this.globalInfo.marketcapvol) - this.assetsOnSite;
          this.createAssetPie();
          this.createExchangePie();
          this.constant.hideLoader();
        });
      });
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getExchangeInfo();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
