import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-coin-desc',
  templateUrl: './coin-desc.page.html',
  styleUrls: ['./coin-desc.page.scss'],
})
export class CoinDescPage implements OnInit {

  code: string;
  coindesc: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.code = this.route.snapshot.paramMap.get('code');
    this.coindesc = this.route.snapshot.paramMap.get('coindesc');
  }

}
