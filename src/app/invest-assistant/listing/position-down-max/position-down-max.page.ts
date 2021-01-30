import { Component, OnInit } from '@angular/core';
import {LargePosition} from '../../../entity/large-position';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {LoaderService} from '../../../service/loader.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-position-down-max',
  templateUrl: './position-down-max.page.html',
  styleUrls: ['./position-down-max.page.scss'],
})
export class PositionDownMaxPage implements OnInit {

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
    this.http.get(this.constant.walletToolBackendUrl + '/largePosition', {
      params: {
        sort: '0'
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
