import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LoaderService} from '../../../service/loader.service';
import {ConstantService} from '../../../service/constant.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-defi-eth-data',
  templateUrl: './defi-eth-data.page.html',
  styleUrls: ['./defi-eth-data.page.scss'],
})
export class DefiEthDataPage implements OnInit {

  data: number[];
  kline: [number[]];
  klineBale: [number[]];
  klineGas: [number[]];
  klineMiner: [number[]];

  @ViewChild('lockUpChart') lockUpChart;
  private lockUpBar: Chart;

  @ViewChild('minerChart') minerChart;
  private minerBar: Chart;

  @ViewChild('gasChart') gasChart;
  private gasBar: Chart;

  @ViewChild('baleChart') baleChart;
  private baleBar: Chart;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private loaderService: LoaderService,
              private constant: ConstantService) {
    this.data = [];
    this.klineMiner = [[]];
    this.klineGas = [[]];
  }

  ngOnInit() {
    this.getEthData();
  }

  getEthData() {
    this.http.get(this.constant.walletToolBackendUrl + '/defi/ethData').subscribe( res => {
      this.data = (res as any).data.data;
      this.kline = (res as any).data.kline;
      this.klineBale = (res as any).data.kline_bale;
      this.klineGas = (res as any).data.kline_gas;
      this.klineMiner = (res as any).data.kline_miner;
      this.createLockUpChart();
      this.createBaleChart();
      this.createMinerChart();
      this.createGasChart();
    });
  }

  createLockUpChart() {
    this.lockUpBar = new Chart(this.lockUpChart.nativeElement, {
      type: 'bar',
      data: {
        labels: this.kline.map((item) => new Date(item[0] * 1000).toDateString()),
        datasets: [{
          label: 'ETH2.0 Pos锁仓',
          backgroundColor: '#c45850',
          yAxisID: 'A',
          data: this.kline.map((item) => item[3])
        }, {
          label: 'ETH Defi锁仓',
          backgroundColor: '#3cba9f',
          yAxisID: 'A',
          data: this.kline.map((item) => item[4])
        }, {
          label: 'ETH 灰度锁仓',
          backgroundColor: '#e0ac08',
          yAxisID: 'A',
          data: this.kline.map((item) => item[5])
        }, {
          label: 'ETH价格',
          type: 'line',
          borderColor: '#000000',
          yAxisID: 'B',
          data: this.kline.map((item) => item[1]),
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
        scales: {
          yAxes: [{
            id: 'A',
            type: 'linear',
            position: 'left',
            ticks: {
              beginAtZero: true
            },
            stacked: true
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

  createGasChart() {
    const klineData = this.klineGas.slice(this.klineGas.length - 15, this.klineGas.length - 1);
    this.gasBar = new Chart(this.gasChart.nativeElement, {
      type: 'bar',
      data: {
        labels: klineData.map((item) => {
          const date = new Date(item[0] * 1000).toDateString();
          return date;
        }),
        datasets: [{
          label: 'ETH日均Gas费用',
          backgroundColor: '#e0ac08',
          data: klineData.map((item) => item[2]),
          fill: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  createBaleChart() {
    const klineBaleData = this.klineBale.slice(this.klineBale.length - 15, this.klineBale.length - 1);
    this.baleBar = new Chart(this.baleChart.nativeElement, {
      type: 'bar',
      data: {
        labels: klineBaleData.map((item) => {
          const date = new Date(item[0] * 1000);
          const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
          const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
          return hour + ':' + minute;
        }),
        datasets: [{
          label: '剩余未打包数量',
          backgroundColor: '#3e95cd',
          data: klineBaleData.map((item) => item[1]),
          fill: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  createMinerChart() {
    const klineData = this.klineMiner.slice(this.klineMiner.length - 15, this.klineMiner.length - 1);
    this.minerBar = new Chart(this.minerChart.nativeElement, {
      type: 'bar',
      data: {
        labels: klineData.map((item) => {
          const date = new Date(item[0] * 1000).toDateString();
          return date;
        }),
        datasets: [{
          label: '矿工每日费用',
          backgroundColor: '#8e5ea2',
          data: klineData.map((item) => item[1]),
          fill: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getEthData();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
