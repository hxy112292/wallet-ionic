import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../service/constant.service';
import {CoinSearchResult} from '../../entity/coin-search-result';
import {LoaderService} from '../../service/loader.service';

@Component({
  selector: 'app-coin-search',
  templateUrl: './coin-search.page.html',
  styleUrls: ['./coin-search.page.scss'],
})
export class CoinSearchPage implements OnInit {

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
    this.http.get(this.constant.walletBackendUrl + '/listingLatest/search/', {
      params: {
        coin: this.searchValue
      }
    }).subscribe(res => {
      this.coinSearchList = (res as any).coinlist;
      this.loaderService.hideLoader();
    });
  }

  toCoinDetail(code) {
    this.router.navigate(['coin-detail', {codeInfo: code}] );
  }

}
