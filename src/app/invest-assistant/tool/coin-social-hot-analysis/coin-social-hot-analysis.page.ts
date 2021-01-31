import {Component, OnInit, ViewChild} from '@angular/core';
import {CoinHotSocial} from '../../../entity/coin-hot-social';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LoaderService} from '../../../service/loader.service';
import {ConstantService} from '../../../service/constant.service';
import {ToastController} from '@ionic/angular';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {Chart} from 'chart.js';
import {CoinSocialStar} from '../../../entity/coin-social-star';

@Component({
  selector: 'app-coin-social-hot-analysis',
  templateUrl: './coin-social-hot-analysis.page.html',
  styleUrls: ['./coin-social-hot-analysis.page.scss'],
})
export class CoinSocialHotAnalysisPage implements OnInit {

  code: string;
  coinHotSocial: CoinHotSocial;
  commitList: CoinHotSocial[];
  coinSocialStarList: CoinSocialStar[];

  // @ts-ignore
  @ViewChild('commitChart') commitChart;
  private commitBar: Chart;

  // @ts-ignore
  @ViewChild('twitterChart') twitterChart;
  private twitterBar: Chart;

  // @ts-ignore
  @ViewChild('redditChart') redditChart;
  private redditBar: Chart;

  // @ts-ignore
  @ViewChild('facebookChart') facebookChart;
  private facebookBar: Chart;

  // @ts-ignore
  @ViewChild('githubChart') githubChart;
  private githubBar: Chart;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private loaderService: LoaderService,
              private constant: ConstantService,
              private toastController: ToastController,
              private clipboard: Clipboard) {
    this.code = '';
    this.coinHotSocial = new CoinHotSocial();
  }

  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('code');
    if (this.code == null || this.code === '') {
      this.code = 'bitcoin';
    }
    this.getHotSocial();
  }

  getHotSocial() {
    this.loaderService.showLoader();
    this.http.get(this.constant.walletToolBackendUrl + '/listingLatest/hotSocial', {
      params: {
        code: this.code
      }
    }).subscribe( res => {
      this.coinHotSocial = (res as any).data.social;
      this.commitList = (res as any).data.devlist;
      this.coinSocialStarList = (res as any).data.scalelist;
      this.createCommitChart();
      this.createTwitterChart();
      this.createRedditChart();
      this.createGithubChart();
      this.createFacebookChart();
      this.loaderService.hideLoader();
    });
  }

  toCoinSearch() {
    this.router.navigate(['coin-social-hot-search']);
  }

  toInvestAssistant() {
    this.router.navigate(['tabs/invest-assistant']);
  }

  createCommitChart() {
    this.commitBar = new Chart(this.commitChart.nativeElement, {
      type: 'line',
      data: {
        labels: this.commitList.map((item) => item.updatedate),
        datasets: [{
          label: '代码提交次数',
          borderColor: '#8e5ea2',
          data: this.commitList.map((item) => item.commits),
          fill: false
        }]
      }
    });
  }

  createTwitterChart() {
    const twitterList = this.coinSocialStarList.filter((item) => {
      if (item.indextype === this.constant.TWITTER_TYPE) {
        return item;
      }
    });
    this.twitterBar = new Chart(this.twitterChart.nativeElement, {
      type: 'line',
      data: {
        labels: twitterList.map((item) => item.updatedate),
        datasets: [{
          label: 'Twitter粉丝数',
          borderColor: '#3e95cd',
          data: twitterList.map((item) => item.focus),
          fill: false
        }]
      }
    });
  }

  createRedditChart() {
    const redditList = this.coinSocialStarList.filter((item) => {
      if (item.indextype === this.constant.REDDIT_TYPE) {
        return item;
      }
    });
    this.redditBar = new Chart(this.redditChart.nativeElement, {
      type: 'line',
      data: {
        labels: redditList.map((item) => item.updatedate),
        datasets: [{
          label: 'Reddit粉丝数',
          borderColor: '#e8c3b9',
          data: redditList.map((item) => item.focus),
          fill: false
        }]
      }
    });
  }

  createGithubChart() {
    const githubList = this.coinSocialStarList.filter((item) => {
      if (item.indextype === this.constant.GITHUB_TYPE) {
        return item;
      }
    });
    this.githubBar = new Chart(this.githubChart.nativeElement, {
      type: 'line',
      data: {
        labels: githubList.map((item) => item.updatedate),
        datasets: [{
          label: 'github粉丝数',
          borderColor: '#c45850',
          data: githubList.map((item) => item.focus),
          fill: false
        }]
      }
    });
  }

  createFacebookChart() {
    const facebookList = this.coinSocialStarList.filter((item) => {
      if (item.indextype === this.constant.FACEBOOK_TYPE) {
        return item;
      }
    });
    this.facebookBar = new Chart(this.facebookChart.nativeElement, {
      type: 'line',
      data: {
        labels: facebookList.map((item) => item.updatedate),
        datasets: [{
          label: 'facebook粉丝数',
          borderColor: '#3cba9f',
          data: facebookList.map((item) => item.focus),
          fill: false
        }]
      }
    });
  }
}
