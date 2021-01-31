import { Component, OnInit } from '@angular/core';
import {CoinSearchResult} from '../../../../entity/coin-search-result';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LoaderService} from '../../../../service/loader.service';
import {ConstantService} from '../../../../service/constant.service';

@Component({
  selector: 'app-coin-holder-search',
  templateUrl: './coin-holder-search.page.html',
  styleUrls: ['./coin-holder-search.page.scss'],
})
export class CoinHolderSearchPage implements OnInit {

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

  toHolderAnalysis(code) {
    this.router.navigate(['coin-holder-analysis', {code}] );
  }

}
