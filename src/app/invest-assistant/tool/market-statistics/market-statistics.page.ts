import {Component, OnInit, ViewChild} from '@angular/core';
import {GlobalInfo} from '../../../entity/global-info';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {Router} from '@angular/router';
import {Chart} from 'chart.js';
import {ExchangeTotal} from '../../../entity/exchange-total';
import {LoaderService} from '../../../service/loader.service';
import {FomoGroup} from '../../../entity/fomo-group';

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

  // @ts-ignore
  @ViewChild('marketTrendChart') marketTrendChart;

  // @ts-ignore
  @ViewChild('fomoChart') fomoChart;

  // @ts-ignore
  @ViewChild('exchangeRateChart') exchangeRateChart;

  exchangeTotal: ExchangeTotal;
  exchangeTotalList: ExchangeTotal[];
  globalInfo: GlobalInfo;
  private assetPies: Chart;
  private exchangePies: Chart;
  private marketTrendBar: Chart;
  private fomoPies: Chart;
  private exchangeRateLines: Chart;
  marketTrendList: [];
  fomoGroup: FomoGroup;

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private loaderService: LoaderService,
              private router: Router) {

    this.exchangeTotal = {
      createTime: '', updateTime: '',
      exchangeCoinUsdTotal: 0, marketCoinUsdTotal: 0, percentageForCoin: 0,
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

    this.fomoGroup = new FomoGroup();
  }

  ngOnInit() {
    this.getExchangeInfo();
    this.getMarketTrend();
    this.getFomoGroup();
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

  createRateLine() {
    const exchangeList = this.exchangeTotalList.reverse();
    this.exchangeRateLines = new Chart(this.exchangeRateChart.nativeElement, {
      type: 'line',
      data: {
        labels: exchangeList.map((item) => item.createTime.substr(0, 10)),
        datasets: [{
          label: '场内资产占比(%)',
          borderColor: '#3e95cd',
          data: exchangeList.map((item) => item.percentage),
          fill: false
        }]
      }
    });
  }

  getExchangeInfo() {
    this.loaderService.showLoader();
    this.http.get(this.constant.walletToolBackendUrl + '/exchange/currency/list', {
      params: {
        pageNum: '1',
        pageSize: '60'
      }
    }).subscribe( res => {
      this.exchangeTotalList = (res as any).result;
      this.exchangeTotal = this.exchangeTotalList[0];
      this.exchangeTotal.exchangeCoinUsdTotal = this.exchangeTotal.exchangeUsdTotal - this.exchangeTotal.exchangeUsdt;
      this.exchangeTotal.marketCoinUsdTotal = this.exchangeTotal.marketUsdTotal - this.exchangeTotal.marketUsdt;
      this.exchangeTotal.percentageForCoin = this.exchangeTotal.exchangeCoinUsdTotal / this.exchangeTotal.marketUsdTotal;
      this.http.get(this.constant.walletToolBackendUrl + '/listingLatest/globalInfo').subscribe( res2 => {
        this.globalInfo = (res2 as any).data;
        this.createAssetPie();
        this.createExchangePie();
        this.createRateLine();
        this.loaderService.hideLoader();
      });
    });
  }

  getMarketTrend() {
    this.http.get(this.constant.walletToolBackendUrl + '/listingLatest/marketTrend').subscribe( res => {
      this.marketTrendList = (res as any).data.fallrise.data;
      this.createMarketTrendChart();
    });
  }

  createMarketTrendChart() {
    this.marketTrendBar = new Chart(this.marketTrendChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['>+10%', '10%', '8%', '6%', '4%', '2%', '-2%', '-4%', '-6%', '-8%', '-10%', '<-10%'],
        datasets: [{
          label: '涨跌分布',
          backgroundColor: '#3e95cd',
          data: this.marketTrendList
        }]
      }
    });
  }

  getFomoGroup() {
    this.http.get(this.constant.walletToolBackendUrl + '/listingLatest/fomo').subscribe( res => {
      this.fomoGroup = (res as any).data.fgi[0];
      this.createFomoPie();
    });
  }

  createFomoPie() {
    this.fomoPies = new Chart(this.fomoChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['贪婪', '恐慌'],
        datasets: [{
          label: '贪婪指数',
          data: [this.fomoGroup.value, 100 - this.fomoGroup.value],
          backgroundColor: [
            'rgba(45, 211, 111, 0.8)',
            'rgba(235, 68, 90, 0.8)'
          ]
        }]
      }
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
