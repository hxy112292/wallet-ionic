import {Component, OnInit, ViewChild} from '@angular/core';
import {GlobalInfo} from '../../../entity/global-info';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../constant.service';
import {Router} from '@angular/router';
import {Chart} from 'chart.js';
import {ExchangeTotal} from '../../../entity/exchange-total';

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

  exchangeTotal: ExchangeTotal;
  globalInfo: GlobalInfo;
  private assetPies: Chart;
  private exchangePies: Chart;

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private router: Router) {

    this.exchangeTotal = {
      exchangeBtc: 0,
      exchangeEth: 0,
      exchangeUsdTotal: 0,
      exchangeUsdt: 0,
      marketBtc: 0,
      marketEth: 0,
      marketUsdTotal: 0,
      marketUsdt: 0,
      percentage: 0
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
          data: [this.exchangeTotal.exchangeUsdTotal, this.exchangeTotal.marketUsdTotal - this.exchangeTotal.exchangeUsdTotal],
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
    this.http.get(this.constant.baseUrl + '/exchange/currency/total').subscribe( res => {
      this.exchangeTotal = (res as any).result;
      this.http.get(this.constant.baseUrl + '/listingLatest/globalInfo').subscribe( res2 => {
        this.globalInfo = (res2 as any).data;
        this.createAssetPie();
        this.createExchangePie();
        this.constant.hideLoader();
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

  toMarketCurrency() {
    this.router.navigate(['market-currency']);
  }

}
