import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LoaderService} from '../../../service/loader.service';
import {ConstantService} from '../../../service/constant.service';
import {CoinFlow} from '../../../entity/coin-flow';
import {CoinHolder} from '../../../entity/coin-holder';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-coin-holder-analysis',
  templateUrl: './coin-holder-analysis.page.html',
  styleUrls: ['./coin-holder-analysis.page.scss'],
})
export class CoinHolderAnalysisPage implements OnInit {

  coinPage: string;
  code: string;
  searchValue: string;
  coinHolderList: CoinFlow[];
  coinFlowList: CoinFlow[];
  coinHolderChart: CoinHolder[];
  currentTop: CoinHolder;

  // @ts-ignore
  @ViewChild('top10RateChart') top10RateChart;
  private top10RateBar: Chart;

  // @ts-ignore
  @ViewChild('top20RateChart') top20RateChart;
  private top20RateBar: Chart;

  // @ts-ignore
  @ViewChild('top50RateChart') top50RateChart;
  private top50RateBar: Chart;

  // @ts-ignore
  @ViewChild('top100RateChart') top100RateChart;
  private top100RateBar: Chart;

  // @ts-ignore
  @ViewChild('addrCountChart') addrCountChart;
  private addrCountBar: Chart;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private loaderService: LoaderService,
              private constant: ConstantService) {
    this.code = 'bitcoin';
    this.coinPage = 'coinHolderChart';
    this.coinHolderList = [];
    this.coinFlowList = [];
    this.coinHolderChart = [];
    this.currentTop = new CoinHolder();
  }

  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('code');
    if (this.code == null || this.code === '') {
      this.code = 'bitcoin';
    }
    this.getHolders();
  }

  getHolders() {
    this.loaderService.showLoader();
    this.http.get(this.constant.walletToolBackendUrl + '/listingLatest/holders', {
      params: {
        code: this.code
      }
    }).subscribe( res => {
      this.coinHolderList = (res as any).data.toplist;
      this.coinFlowList = (res as any).data.flows;
      this.coinHolderChart = (res as any).data.holdcoin.list;
      this.currentTop = (res as any).data.top;
      this.createAddrCountChart();
      this.createTop10RateChart();
      this.createTop20RateChart();
      this.createTop50RateChart();
      this.createTop100RateChart();
      this.loaderService.hideLoader();
    });
  }

  toCoinSearch() {
    this.router.navigate(['coin-holder-search']);
  }

  toInvestAssistant() {
    this.router.navigate(['tabs/invest-assistant']);
  }

  createTop10RateChart() {
    this.top10RateBar = new Chart(this.top10RateChart.nativeElement, {
      type: 'line',
      data: {
        labels: this.coinHolderChart.map((item) => item.updatedate),
        datasets: [{
          label: 'top10大户的持仓占比(%)',
          borderColor: '#e8c3b9',
          data: this.coinHolderChart.map((item) => item.top10rate),
          fill: false
        }]
      }
    });
  }

  createTop20RateChart() {
    this.top20RateBar = new Chart(this.top20RateChart.nativeElement, {
      type: 'line',
      data: {
        labels: this.coinHolderChart.map((item) => item.updatedate),
        datasets: [{
          label: 'top20大户的持仓占比(%)',
          borderColor: '#3e95cd',
          data: this.coinHolderChart.map((item) => item.top20rate),
          fill: false
        }]
      }
    });
  }

  createTop50RateChart() {
    this.top50RateBar = new Chart(this.top50RateChart.nativeElement, {
      type: 'line',
      data: {
        labels: this.coinHolderChart.map((item) => item.updatedate),
        datasets: [{
          label: 'top50大户的持仓占比(%)',
          borderColor: '#8e5ea2',
          data: this.coinHolderChart.map((item) => item.top50rate),
          fill: false
        }]
      }
    });
  }

  createTop100RateChart() {
    this.top100RateBar = new Chart(this.top100RateChart.nativeElement, {
      type: 'line',
      data: {
        labels: this.coinHolderChart.map((item) => item.updatedate),
        datasets: [{
          label: 'top100大户的持仓占比(%)',
          borderColor: '#3cba9f',
          data: this.coinHolderChart.map((item) => item.top100rate),
          fill: false
        }]
      }
    });
  }

  createAddrCountChart() {
    this.addrCountBar = new Chart(this.addrCountChart.nativeElement, {
      type: 'bar',
      data: {
        labels: this.coinHolderChart.map((item) => item.updatedate),
        datasets: [{
          label: '地址数量',
          backgroundColor: '#c45850',
          data: this.coinHolderChart.map((item) => item.addrcount),
          fill: false
        }]
      }
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getHolders();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
