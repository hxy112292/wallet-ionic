import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LoaderService} from '../../../service/loader.service';
import {ConstantService} from '../../../service/constant.service';
import {Chart} from 'chart.js';

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

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private loaderService: LoaderService,
              private constant: ConstantService) {
    this.coinPage = 'trend';
    this.worthInfo = [];
    this.trendList = [[]];
  }

  ngOnInit() {
    this.getWorthTrend();
  }

  getWorthTrend() {
    this.http.get(this.constant.walletToolBackendUrl + '/defi/worthTrend').subscribe( res => {
      this.trendList = (res as any).data;
      this.worthInfo = this.trendList[this.trendList.length - 1];
      this.createTrendChart();
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
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
