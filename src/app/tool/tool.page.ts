import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ConstantService} from '../constant.service';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.page.html',
  styleUrls: ['./tool.page.scss'],
})
export class ToolPage implements OnInit {

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
    this.router.navigate(['tabs/tool/hot-coin']);
  }

  toConcept() {
    this.router.navigate(['tabs/tool/concept']);
  }

  toGitDev() {
    this.router.navigate(['tabs/tool/git-dev']);
  }

  toTurnOver() {
    this.router.navigate(['tabs/tool/turnover']);
  }

  toMonitor() {
    if (this.constant.getUser() == null || this.constant.getUser().id == null || this.constant.getUser().id === '') {
      this.constant.alert('请先登录，才能使用该功能');
      this.router.navigate(['tabs/me']);
      return;
    }
    this.router.navigate(['tabs/tool/monitor-blockchain']);
  }

  toHotWeb() {
    this.router.navigate(['tabs/tool/hot-web']);
  }

  toBlockchainBrowser() {
    this.router.navigate(['tabs/tool/blockchain-browser']);
  }

  toLiveNews() {
    this.router.navigate(['tabs/live-news']);
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
    this.router.navigate(['tabs/tool/price-notification']);
  }

  openAccelerator() {
    const url = 'https://www.viabtc.com/tools/txaccelerator/';
    const target = '_self';
    this.inAppBrowser.create(url, target, this.options);
  }

  toExchange() {
    this.router.navigate(['tabs/tool/exchange']);
  }
}
