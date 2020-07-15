import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../constant.service';
import {CoinSearchResult} from '../../entity/coin-search-result';

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
              private constant: ConstantService) { }


  ngOnInit() {
  }

  getSearchResult() {
    this.constant.showLoader();
    this.http.get(this.constant.baseUrl + '/listingLatest/search/', {
      params: {
        coin: this.searchValue
      }
    }).subscribe(res => {
      this.coinSearchList = (res as any).coinlist;
      this.constant.hideLoader();
    });
  }

  toCoinDetail(code) {
    this.router.navigate(['coin-detail', {codeInfo: code}] );
  }

}
