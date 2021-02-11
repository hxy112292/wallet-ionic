import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LoaderService} from '../../../service/loader.service';
import {ConstantService} from '../../../service/constant.service';
import {GrayScaleCoin} from '../../../entity/gray-scale-coin';
import {GrayScaleOrganization} from '../../../entity/gray-scale-organization';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-gray-scale',
  templateUrl: './gray-scale.page.html',
  styleUrls: ['./gray-scale.page.scss'],
})
export class GrayScalePage implements OnInit {

  grayScaleCoinList: GrayScaleCoin[];
  grayScaleOrganizationList: GrayScaleOrganization[];
  grayScaleOpenTrend: [number[], number[], number[], number[], number[]];
  coinPage: string;
  btcPrice: string;

  @ViewChild('openTrendChart') openTrendChart;
  private openTrendLine: Chart;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private loaderService: LoaderService,
              private constant: ConstantService) {
    this.grayScaleCoinList = [];
    this.grayScaleOrganizationList = [];
    this.grayScaleOpenTrend = [[], [], [], [], []];
    this.coinPage = 'openTrend';
  }

  ngOnInit() {
    this.getBitcoinPrice();
    this.getOpenTrend();
    this.getCoinList();
    this.getOrganizationList();
  }

  getBitcoinPrice() {
    this.http.get(this.constant.walletBackendUrl + '/monitorPrice/coinPrice', {
      params: {
        symbol: 'btcusdt'
      }
    }).subscribe( res => {
      this.btcPrice = (res as any).result.close;
    });
  }

  getCoinList() {
    this.http.get(this.constant.walletBackendUrl + '/grayscale/coinList').subscribe( res => {
      this.grayScaleCoinList = (res as any).data.list;
    });
  }

  getOrganizationList() {
    this.http.get(this.constant.walletBackendUrl + '/grayscale/organization').subscribe( res => {
      this.grayScaleOrganizationList = (res as any).data.list;
    });
  }

  getOpenTrend() {
    this.http.get(this.constant.walletBackendUrl + '/grayscale/openTrend').subscribe( res => {
      this.grayScaleOpenTrend = (res as any).data.interest;
      this.createOpenTrendChart();
    });
  }

  createOpenTrendChart() {
    const openTrendData = this.grayScaleOpenTrend.reverse();
    this.openTrendLine = new Chart(this.openTrendChart.nativeElement, {
      type: 'line',
      data: {
        labels: openTrendData.map((item) => new Date(item[0] * 1000).toDateString()),
        datasets: [{
          label: 'GBTC持仓价值($)',
          borderColor: '#3e95cd',
          borderWidth: 2,
          fill: true,
          yAxisID: 'A',
          data: openTrendData.map((item) => item[2])
        }, {
          label: 'GBTC预估成本($)',
          borderColor: '#3cba9f',
          borderWidth: 2,
          fill: true,
          yAxisID: 'A',
          data: openTrendData.map((item) => item[3])
        }, {
          label: 'GBTC预估均价($)',
          borderColor: '#e0ac08',
          borderWidth: 2,
          fill: false,
          yAxisID: 'B',
          data: openTrendData.map((item) => item[4])
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
        scales: {
          yAxes: [{
            id: 'A',
            type: 'linear',
            position: 'left',
          }, {
            id: 'B',
            type: 'linear',
            position: 'right',
            ticks: {
              min: 0
            }
          }]
        }
      }
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getCoinList();
    this.getOrganizationList();
    this.getOpenTrend();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
