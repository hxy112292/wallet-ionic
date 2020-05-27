import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../constant.service';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx';
import {BlockchainBrowser} from '../../../entity/blockchain-browser';

@Component({
  selector: 'app-blockchain-browser',
  templateUrl: './blockchain-browser.page.html',
  styleUrls: ['./blockchain-browser.page.scss'],
})
export class BlockchainBrowserPage implements OnInit {

  browserList: BlockchainBrowser[];
  options: InAppBrowserOptions;

  constructor(private http: HttpClient,
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
    this.getBrowserList();
  }

  getBrowserList() {
    this.http.get(this.constant.baseUrl + '/blockchainBrowser').subscribe(res => {
      this.browserList = (res as any).result;
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getBrowserList();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  openWeb(url: string) {
    const target = '_self';
    this.inAppBrowser.create(url, target, this.options);
  }

}
