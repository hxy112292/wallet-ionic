import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {ExchangeCurrency} from '../../../../entity/exchange-currency';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../../constant.service';

@Component({
  selector: 'app-market-currency',
  templateUrl: './market-currency.page.html',
  styleUrls: ['./market-currency.page.scss'],
})
export class MarketCurrencyPage implements OnInit {

  marketCurrencyList: ExchangeCurrency[];

  constructor(private http: HttpClient,
              private constant: ConstantService) {
    this.marketCurrencyList = [];
  }

  ngOnInit() {
    this.getExchangeCurrency();
  }

  getExchangeCurrency() {
    this.constant.showLoader();
    this.http.get(this.constant.baseUrl + '/exchange/currency/rank').subscribe( res => {
      this.marketCurrencyList = (res as any).data.reserves_list;
      this.constant.hideLoader();
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getExchangeCurrency();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
