import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.page.html',
  styleUrls: ['./coin-detail.page.scss'],
})
export class CoinDetailPage implements OnInit {

  coinPage: string;
  code: string;

  constructor(private route: ActivatedRoute) {
    this.code = '';
    this.coinPage = 'coinIntroduction';
  }

  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('codeInfo');
  }

}
