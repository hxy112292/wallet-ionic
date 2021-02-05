import {Component, Input, OnInit} from '@angular/core';
import {DefiLockUp} from '../../../../entity/defi-lock-up';
import {Router} from '@angular/router';

@Component({
  selector: 'app-defi-lock-up-list',
  templateUrl: './defi-lock-up-list.page.html',
  styleUrls: ['./defi-lock-up-list.page.scss'],
})
export class DefiLockUpListPage implements OnInit {

  @Input() lockUpList: DefiLockUp[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toCoinDetail(code) {
    this.router.navigate(['coin-detail', {codeInfo: code}] );
  }

  toExchangeDetail(code) {
    this.router.navigate(['exchange-detail', {codeInfo: code}] );
  }

}
