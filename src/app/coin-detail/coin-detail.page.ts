import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.page.html',
  styleUrls: ['./coin-detail.page.scss'],
})
export class CoinDetailPage implements OnInit {

  coinPage: string;

  constructor() {

    this.coinPage = 'coinIntroduction';
  }

  ngOnInit() {


  }

}
