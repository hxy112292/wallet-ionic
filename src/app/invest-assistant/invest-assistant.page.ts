import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ConstantService} from '../service/constant.service';
import {UserService} from '../service/user.service';
import {BrowserService} from '../service/browser.service';
import {AlertService} from '../service/alert.service';

@Component({
  selector: 'app-invest-assistant',
  templateUrl: './invest-assistant.page.html',
  styleUrls: ['./invest-assistant.page.scss'],
})
export class InvestAssistantPage implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserService,
              private browserService: BrowserService,
              private alertService: AlertService,
              private constant: ConstantService) {
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
    if (this.userService.user == null || this.userService.user.id == null || this.userService.user.id === '') {
      this.alertService.alert('请先登录，才能使用该功能');
      this.router.navigate(['tabs/me']);
      return;
    }
    if (this.userService.user != null && this.userService.user.role.indexOf(this.constant.ROLE_VIP) === -1) {
      this.alertService.alert('请先成为会员，才能使用该功能');
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
    if (this.userService.user == null || this.userService.user.id == null || this.userService.user.id === '') {
      this.alertService.alert('请先登录，才能使用该功能');
      this.router.navigate(['tabs/me']);
      return;
    }
    if (this.userService.user != null && this.userService.user.role.indexOf(this.constant.ROLE_VIP) === -1) {
      this.alertService.alert('请先成为会员，才能使用该功能');
      this.router.navigate(['tabs/me']);
      return;
    }
    this.router.navigate(['price-notification']);
  }

  openAccelerator() {
    const url = 'https://www.viabtc.com/tools/txaccelerator/';
    this.browserService.openBrowser(url);
  }

  toExchange() {
    this.router.navigate(['exchange']);
  }

  openMarketStatistics() {
    if (this.userService.user == null || this.userService.user.id == null || this.userService.user.id === '') {
      this.alertService.alert('请先登录，才能使用该功能');
      this.router.navigate(['tabs/me']);
      return;
    }
    if (this.userService.user != null && this.userService.user.role.indexOf(this.constant.ROLE_VIP) === -1) {
      this.alertService.alert('请先成为会员，才能使用该功能');
      this.router.navigate(['tabs/me']);
      return;
    }
    this.router.navigate(['market-statistics']);
  }

  toChangeUpMax() {
    this.router.navigate(['change-up-max']);
  }

  toChangeDownMax() {
    this.router.navigate(['change-down-max']);
  }

  toChangeVol() {
    this.router.navigate(['change-vol']);
  }

  toPositionUpMax() {
    this.router.navigate(['position-up-max']);
  }

  toPositionDownMax() {
    this.router.navigate(['position-down-max']);
  }

  toAddressRank() {
    this.router.navigate(['address-up-max']);
  }

  toCoinSocialHotAnalysis() {
    if (this.userService.user == null || this.userService.user.id == null || this.userService.user.id === '') {
      this.alertService.alert('请先登录，才能使用该功能');
      this.router.navigate(['tabs/me']);
      return;
    }
    if (this.userService.user != null && this.userService.user.role.indexOf(this.constant.ROLE_VIP) === -1) {
      this.alertService.alert('请先成为会员，才能使用该功能');
      this.router.navigate(['tabs/me']);
      return;
    }
    this.router.navigate(['coin-social-hot-analysis']);
  }

  toCoinHolderAnalysis() {
    if (this.userService.user == null || this.userService.user.id == null || this.userService.user.id === '') {
      this.alertService.alert('请先登录，才能使用该功能');
      this.router.navigate(['tabs/me']);
      return;
    }
    if (this.userService.user != null && this.userService.user.role.indexOf(this.constant.ROLE_VIP) === -1) {
      this.alertService.alert('请先成为会员，才能使用该功能');
      this.router.navigate(['tabs/me']);
      return;
    }
    this.router.navigate(['coin-holder-analysis']);
  }

  toGrayScale() {
    this.router.navigate(['gray-scale']);
  }
}
