import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {BlockchainBrowser} from '../../../entity/blockchain-browser';

@Component({
  selector: 'app-blockchain-browser',
  templateUrl: './blockchain-browser.page.html',
  styleUrls: ['./blockchain-browser.page.scss'],
})
export class BlockchainBrowserPage implements OnInit {

  browserList: BlockchainBrowser[];

  constructor(private http: HttpClient,
              private constant: ConstantService) {
  }

  ngOnInit() {
    this.getBrowserList();
  }

  getBrowserList() {
    this.http.get(this.constant.walletToolBackendUrl + '/blockchainBrowser').subscribe(res => {
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
    this.constant.openBrowser(url);
  }

}
