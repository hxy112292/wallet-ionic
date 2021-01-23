import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {Router} from '@angular/router';
import {Exchange} from '../../../entity/exchange';
import {CoinDetail} from '../../../entity/coin-detail';
import {GlobalInfo} from '../../../entity/global-info';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.page.html',
  styleUrls: ['./exchange.page.scss'],
})
export class ExchangePage implements OnInit {

  exchangeList: Exchange[];

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private router: Router) {
  }

  ngOnInit() {

    this.getExchangeInfo();
  }

  getExchangeInfo() {
    this.constant.showLoader();
    this.http.get(this.constant.walletToolBackendUrl + '/exchange').subscribe(res => {
      this.exchangeList = (res as any).data;
      this.constant.hideLoader();
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getExchangeInfo();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  toExchangeDetail(code) {
    this.router.navigate(['exchange-detail', {codeInfo: code}] );
  }
}
