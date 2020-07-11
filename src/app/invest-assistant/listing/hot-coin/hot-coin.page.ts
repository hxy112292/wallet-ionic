import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Hotcoin} from '../../../entity/hotcoin';
import {ConstantService} from '../../../constant.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hot-coin',
  templateUrl: './hot-coin.page.html',
  styleUrls: ['./hot-coin.page.scss'],
})
export class HotCoinPage implements OnInit {

  hotCoinList: Hotcoin[];

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private router: Router) { }

  ngOnInit() {
    this.getHotCoinInfo();
  }

  getHotCoinInfo() {
    this.http.get(this.constant.baseUrl + '/hotcoin').subscribe(res => {
      this.hotCoinList = (res as any).data;
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getHotCoinInfo();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  toCoinDetail(code) {
    this.router.navigate(['coin-detail', {codeInfo: code}] );
  }
}
