import { Component, OnInit } from '@angular/core';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx';
import {ActivatedRoute, Router} from '@angular/router';
import {ConstantService} from '../constant.service';

@Component({
  selector: 'app-invest-assistant',
  templateUrl: './invest-assistant.page.html',
  styleUrls: ['./invest-assistant.page.scss'],
})
export class InvestAssistantPage implements OnInit {

  options: InAppBrowserOptions;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private constant: ConstantService,
              private inAppBrowser: InAppBrowser) {

    this.options = {
      location : 'yes',
      hidden : 'no',
      clearcache : 'yes',
      clearsessioncache : 'yes',
      zoom : 'yes',
      hardwareback : 'yes',
      mediaPlaybackRequiresUserAction : 'no',
      shouldPauseOnSuspend : 'no',
    };
  }

  ngOnInit() {
  }

  toHotCoin() {
    this.router.navigate(['hot-coin']);
  }

  toConcept() {
    this.router.navigate(['concept']);
  }

  toGitDev() {
    this.router.navigate(['git-dev']);
  }

  toTurnOver() {
    this.router.navigate(['turnover']);
  }

  toMonitor() {
    if (this.constant.getUser() == null || this.constant.getUser().id == null || this.constant.getUser().id === '') {
      this.constant.alert('请先登录，才能使用该功能');
      this.router.navigate(['tabs/me']);
      return;
    }
    this.router.navigate(['monitor-blockchain']);
  }

  toHotWeb() {
    this.router.navigate(['hot-web']);
  }

  toBlockchainBrowser() {
    this.router.navigate(['blockchain-browser']);
  }

  toLiveNews() {
    this.router.navigate(['tabs/news']);
  }

  toListingLatest() {
    this.router.navigate(['tabs/listing-latest']);
  }

  toPriceNotification() {
    if (this.constant.getUser() == null || this.constant.getUser().id == null || this.constant.getUser().id === '') {
      this.constant.alert('请先登录，才能使用该功能');
      this.router.navigate(['tabs/me']);
      return;
    }
    this.router.navigate(['price-notification']);
  }

  openAccelerator() {
    const url = 'https://www.viabtc.com/tools/txaccelerator/';
    const target = '_self';
    this.inAppBrowser.create(url, target, this.options);
  }

  toExchange() {
    this.router.navigate(['exchange']);
  }

  openMarketStatistics() {
    this.router.navigate(['market-statistics']);
  }
}
