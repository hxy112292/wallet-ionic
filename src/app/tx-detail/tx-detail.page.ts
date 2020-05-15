import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TxHistory} from '../entity/tx-history';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx';
import {TxDest} from '../entity/tx-dest';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../constant.service';

@Component({
  selector: 'app-tx-detail',
  templateUrl: './tx-detail.page.html',
  styleUrls: ['./tx-detail.page.scss'],
})
export class TxDetailPage implements OnInit {

  txHistory: TxHistory;
  txDestList: TxDest[];

  options: InAppBrowserOptions;

  constructor(private route: ActivatedRoute,
              private inAppBrowser: InAppBrowser,
              private http: HttpClient,
              private constant: ConstantService) {

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
    this.txHistory = JSON.parse(this.route.snapshot.paramMap.get('txHistoryInfo'));
    this.getTxDest();
  }

  openHash(url: string) {
    url = 'https://www.blockchain.com/btc/tx/' + url;
    const target = '_self';
    this.inAppBrowser.create(url, target, this.options);
  }

  openAddress(url: string) {
    url = 'https://www.blockchain.com/btc/address/' + url;
    const target = '_self';
    this.inAppBrowser.create(url, target, this.options);
  }

  getTxDest() {
    this.http.get(this.constant.baseUrl + '/txDest', {
      params: {
        symbol: 'BTC',
        hash: this.txHistory.txHash
      }
    }).subscribe(res => {
      this.txDestList = (res as any).result;
    });
  }
}
