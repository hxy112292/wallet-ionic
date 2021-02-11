import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LoaderService} from '../../service/loader.service';
import {ConstantService} from '../../service/constant.service';
import {CoinReduceHalf} from '../../entity/coin-reduce-half';

@Component({
  selector: 'app-coin-reduce-half',
  templateUrl: './coin-reduce-half.page.html',
  styleUrls: ['./coin-reduce-half.page.scss'],
})
export class CoinReduceHalfPage implements OnInit {

  code: string;
  coinReduceHalf: CoinReduceHalf;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private loaderService: LoaderService,
              private constant: ConstantService) {

    this.coinReduceHalf = new CoinReduceHalf();
  }

  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('codeInfo');
    this.getReduceHalf();
  }

  getReduceHalf() {
    this.loaderService.showLoader();
    this.http.get(this.constant.walletBackendUrl + '/listingLatest/reduceHalf', {
      params: {
        code: this.code
      }
    }).subscribe( res => {
      this.coinReduceHalf = (res as any).data;
      this.loaderService.hideLoader();
    });
  }

}
