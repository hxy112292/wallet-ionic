import { Component, OnInit } from '@angular/core';
import {CoinChange} from '../../../entity/coin-change';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {LoaderService} from '../../../service/loader.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-change-vol',
  templateUrl: './change-vol.page.html',
  styleUrls: ['./change-vol.page.scss'],
})
export class ChangeVolPage implements OnInit {

  coinList: CoinChange[];
  sort: string;

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private loaderService: LoaderService,
              private router: Router) { }

  ngOnInit() {
    this.sort = 'vol';
    this.getChangeMax();
  }

  getChangeMax() {
    this.loaderService.showLoader();
    this.http.get(this.constant.walletBackendUrl + '/change/vol', {
      params: {
        sort: this.sort
      }
    }).subscribe(res => {
      this.coinList = (res as any).data.list;
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
