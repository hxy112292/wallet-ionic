import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {LoaderService} from '../../../service/loader.service';
import {Router} from '@angular/router';
import {LargePosition} from '../../../entity/large-position';

@Component({
  selector: 'app-position-up-max',
  templateUrl: './position-up-max.page.html',
  styleUrls: ['./position-up-max.page.scss'],
})
export class PositionUpMaxPage implements OnInit {

  coinList: LargePosition[];

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private loaderService: LoaderService,
              private router: Router) { }

  ngOnInit() {
    this.getChangeMax();
  }

  getChangeMax() {
    this.loaderService.showLoader();
    this.http.get(this.constant.walletBackendUrl + '/largePosition', {
      params: {
        sort: '1'
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
