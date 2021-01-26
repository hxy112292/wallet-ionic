import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {Turnover} from '../../../entity/turnover';
import {Router} from '@angular/router';
import {LoaderService} from '../../../service/loader.service';

@Component({
  selector: 'app-turnover',
  templateUrl: './turnover.page.html',
  styleUrls: ['./turnover.page.scss'],
})
export class TurnoverPage implements OnInit {

  turnoverList: Turnover[];

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private loaderService: LoaderService,
              private router: Router) { }

  ngOnInit() {
    this.getTurnOver();
  }

  getTurnOver() {
    this.loaderService.showLoader();
    this.http.get(this.constant.walletToolBackendUrl + '/turnover').subscribe(res => {
      this.turnoverList = (res as any).data;
      this.loaderService.hideLoader();
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getTurnOver();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  toCoinDetail(code) {
    this.router.navigate(['coin-detail', {codeInfo: code}] );
  }
}
