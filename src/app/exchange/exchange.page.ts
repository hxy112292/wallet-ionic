import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../constant.service';
import {Router} from '@angular/router';
import {Exchange} from '../entity/exchange';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.page.html',
  styleUrls: ['./exchange.page.scss'],
})
export class ExchangePage implements OnInit {

  exchangeList: Exchange[];

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private router: Router) { }

  ngOnInit() {

    this.getExchangeInfo();
  }

  getExchangeInfo() {
    this.http.get(this.constant.baseUrl + '/exchange').subscribe(res => {
      this.exchangeList = (res as any).data;
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
    this.router.navigate(['tabs/tool/exchange-detail', {codeInfo: code}] );
  }
}
