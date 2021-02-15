import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LoaderService} from '../../../service/loader.service';
import {ConstantService} from '../../../service/constant.service';
import {Chart} from 'chart.js';
import {DefiLockUp} from '../../../entity/defi-lock-up';
import {DefiRate} from '../../../entity/defi-rate';
import {DefiMiningPool} from '../../../entity/defi-mining-pool';

@Component({
  selector: 'app-defi-data',
  templateUrl: './defi-data.page.html',
  styleUrls: ['./defi-data.page.scss'],
})
export class DefiDataPage implements OnInit {

  // @ts-ignore
  @ViewChild('trendChart') trendChart;
  private trendLine: Chart;

  coinPage: string;
  trendList: [number[]];
  worthInfo: number[];
  lockUpList: DefiLockUp[];
  debitRateList: [string[]];
  depositRateList: [string[]];
  rateList: DefiRate[];
  miningPoolList: DefiMiningPool[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private loaderService: LoaderService,
              private constant: ConstantService) {
    this.coinPage = 'trend';
    this.worthInfo = [];
    this.trendList = [[]];
    this.lockUpList = [];
    this.debitRateList = [[]];
    this.depositRateList = [[]];
    this.rateList = [];
  }

  async ngOnInit() {
    this.getWorthTrend();
    this.getLockUpList();
    this.getDebitRateList();
    this.getMiningPoolList();
  }

  getWorthTrend() {
    this.http.get(this.constant.walletBackendUrl + '/defi/worthTrend').subscribe( res => {
      this.trendList = (res as any).data;
      this.worthInfo = this.trendList[this.trendList.length - 1];
      this.createTrendChart();
    });
  }

  getLockUpList() {
    this.http.get(this.constant.walletBackendUrl + '/defi/lockUpList').subscribe( res => {
      this.lockUpList = (res as any).data.list[0].lockupitem;
    });
  }

  getDebitRateList() {
    this.http.get(this.constant.walletBackendUrl + '/defi/rateList', {
      params: {
        type: this.constant.DEFI_RATE_DEBIT
      }
    }).subscribe( res => {
      this.debitRateList = (res as any).data.list;
      this.getDepositRateList();
    });
  }

  getDepositRateList() {
    this.http.get(this.constant.walletBackendUrl + '/defi/rateList', {
      params: {
        type: this.constant.DEFI_RATE_DEPOSIT
      }
    }).subscribe( res => {
      this.depositRateList = (res as any).data.list;
      this.mergeRateList();
    });
  }

  async mergeRateList() {
    for (const debitRate of this.debitRateList) {
      for (const depositRate of this.depositRateList) {
        if (debitRate[0] === depositRate[0]) {
          const defiRate = new DefiRate();
          defiRate.code = debitRate[5];
          defiRate.symbol = debitRate[0];
          defiRate.logo = debitRate[1];
          defiRate.debitRate = debitRate[2];
          defiRate.depositRate = depositRate[2];
          this.rateList.push(defiRate);
          // @ts-ignore
          this.debitRateList = this.debitRateList.filter(item => item[0] !== debitRate[0]);
          // @ts-ignore
          this.depositRateList = this.depositRateList.filter(item => item[0] !== depositRate[0]);
          break;
        }
      }
    }
    for (const debitRate of this.debitRateList) {
      const defiRate = new DefiRate();
      defiRate.code = debitRate[5];
      defiRate.symbol = debitRate[0];
      defiRate.logo = debitRate[1];
      defiRate.debitRate = debitRate[2];
      defiRate.depositRate = '';
      this.rateList.push(defiRate);
    }
    for (const depositRate of this.depositRateList) {
      const defiRate = new DefiRate();
      defiRate.code = depositRate[5];
      defiRate.symbol = depositRate[0];
      defiRate.logo = depositRate[1];
      defiRate.debitRate = '';
      defiRate.depositRate = depositRate[2];
      this.rateList.push(defiRate);
    }
  }

  getMiningPoolList() {
    this.http.get(this.constant.walletBackendUrl + '/defi/miningList').subscribe( res => {
      this.miningPoolList = (res as any).data.list.filter((item) => item.price !== 0);
    });
  }

  createTrendChart() {
    const trendData = this.trendList;
    this.trendLine = new Chart(this.trendChart.nativeElement, {
      type: 'line',
      data: {
        labels: trendData.map((item) => new Date(item[0] * 1000).toDateString()),
        datasets: [{
          label: '持仓金额($)',
          borderColor: '#e8c3b9',
          borderWidth: 2,
          data: trendData.map((item) => item[1]),
          fill: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          point: {
            radius: 0
          }
        },
      }
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getWorthTrend();
    this.getLockUpList();
    this.getDebitRateList();
    this.getMiningPoolList();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
