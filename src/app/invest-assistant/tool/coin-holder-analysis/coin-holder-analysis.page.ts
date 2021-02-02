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
  coinAnalysisText: string;

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
    this.coinAnalysisText = '';
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
      this.coinAnalysis();
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

  coinAnalysis() {
    const addrChangeRate = (this.coinHolderChart[29].addrcount - this.coinHolderChart[0].addrcount) / this.coinHolderChart[0].addrcount;
    this.coinAnalysisText = '\n地址增加情况：';
    if (addrChangeRate >= 0.03) {
      this.coinAnalysisText += '地址增加速率较高\n';
    } else if (addrChangeRate >= 0.015 && addrChangeRate < 0.03) {
      this.coinAnalysisText += '地址增加速率正常\n';
    } else if (addrChangeRate < 0.015) {
      this.coinAnalysisText += '地址增加速率较低\n';
    }
    const topChangeRate = (this.coinHolderChart[29].top100rate - this.coinHolderChart[0].top100rate) / this.coinHolderChart[0].top100rate;
    this.coinAnalysisText += '链上流动情况：';
    if (topChangeRate >= 0.01) {
      this.coinAnalysisText += '大户持仓持续增加\n';
    } else if (topChangeRate >= 0 && topChangeRate < 0.01) {
      this.coinAnalysisText += '大户持仓增加缓慢\n';
    } else if (topChangeRate < 0) {
      this.coinAnalysisText += '大户持仓正在减少\n';
    }
    const topRate = this.coinHolderChart[29].top100rate;
    this.coinAnalysisText += '筹码集中情况：';
    if (topRate >= 80) {
      this.coinAnalysisText += '筹码高度集中\n';
    } else if (topRate >= 70 && topRate < 80) {
      this.coinAnalysisText += '筹码比较集中\n';
    } else if (topRate < 70) {
      this.coinAnalysisText += '筹码比较均衡\n';
    }

    this.coinAnalysisText += '总结分析：';
    if (topRate >= 80 && topChangeRate >= 0) {
      this.coinAnalysisText += '主力高度控盘，若币价处于低位，可继续持有或逢低建仓；若币价处于高位，可考虑逢高减仓。';
    } else if (topRate < 80 && topChangeRate >= 0) {
      this.coinAnalysisText += '筹码分布较为均衡，大户持仓正在增加。可考虑做高抛低吸，来回震荡操作。';
    } else if (addrChangeRate >= 0.015 && this.coinFlowList.length >= 10) {
      this.coinAnalysisText += '地址正在快速增加，链上流动整体较为活跃，大额流动频繁，可保持关注';
    } else if (addrChangeRate >= 0.015 && this.coinFlowList.length < 10) {
      this.coinAnalysisText += '地址正在快速增加，链上流动整体较为活跃，小额流动频繁，可保持关注';
    } else if (topChangeRate < -0.1) {
      this.coinAnalysisText += '主力有出逃嫌疑，可考虑逢高减仓，规避风险。';
    }
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
