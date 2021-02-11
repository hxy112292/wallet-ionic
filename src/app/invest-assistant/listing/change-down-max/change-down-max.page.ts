import { Component, OnInit } from '@angular/core';
import {CoinChange} from '../../../entity/coin-change';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {LoaderService} from '../../../service/loader.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-change-down-max',
  templateUrl: './change-down-max.page.html',
  styleUrls: ['./change-down-max.page.scss'],
})
export class ChangeDownMaxPage implements OnInit {

  coinList: CoinChange[];
  sort: string;

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private loaderService: LoaderService,
              private router: Router) { }

  ngOnInit() {
    this.sort = '4';
    this.getChangeMax();
  }

  getChangeMax() {
    this.loaderService.showLoader();
    this.http.get(this.constant.walletBackendUrl + '/change/max', {
      params: {
        sort: this.sort,
        isUp: '0'
      }
    }).subscribe(res => {
      this.coinList = (res as any).data;
      this.loaderService.hideLoader();
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getChangeMax();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  toCoinDetail(code) {
    this.router.navigate(['coin-detail', {codeInfo: code}] );
  }

}
