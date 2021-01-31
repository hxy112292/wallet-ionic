import { Component, OnInit } from '@angular/core';
import {CoinSearchResult} from '../../../../entity/coin-search-result';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LoaderService} from '../../../../service/loader.service';
import {ConstantService} from '../../../../service/constant.service';

@Component({
  selector: 'app-coin-social-hot-search',
  templateUrl: './coin-social-hot-search.page.html',
  styleUrls: ['./coin-social-hot-search.page.scss'],
})
export class CoinSocialHotSearchPage implements OnInit {

  searchValue: any;
  coinSearchList: CoinSearchResult[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private loaderService: LoaderService,
              private constant: ConstantService) { }


  ngOnInit() {
  }

  getSearchResult() {
    this.loaderService.showLoader();
    this.http.get(this.constant.walletToolBackendUrl + '/listingLatest/search/', {
      params: {
        coin: this.searchValue
      }
    }).subscribe(res => {
      this.coinSearchList = (res as any).coinlist;
      this.loaderService.hideLoader();
    });
  }

  toSocialHotAnalysis(code) {
    this.router.navigate(['coin-social-hot-analysis', {code}] );
  }

}
