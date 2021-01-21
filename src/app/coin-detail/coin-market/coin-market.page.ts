import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../service/constant.service';
import {CoinMarket} from '../../entity/coin-market';

@Component({
  selector: 'app-coin-market',
  templateUrl: './coin-market.page.html',
  styleUrls: ['./coin-market.page.scss'],
})
export class CoinMarketPage implements OnInit {

  code: string;
  coinMarketList: CoinMarket[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private constant: ConstantService) {

    this.coinMarketList = [];
  }

  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('codeInfo');
    this.getCoinMarket();
  }

  getCoinMarket() {
    this.constant.showLoader();
    this.http.get(this.constant.baseUrl + '/listingLatest/coinMarket', {
      params: {
        code: this.code
      }
    }).subscribe( res => {
        this.coinMarketList = (res as any).data;
        this.constant.hideLoader();
    });
  }

  toExchangeDetail(code) {
    this.router.navigate(['exchange-detail', {codeInfo: code}] );
  }

}
