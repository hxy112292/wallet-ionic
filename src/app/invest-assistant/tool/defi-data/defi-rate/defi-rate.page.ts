import {Component, Input, OnInit} from '@angular/core';
import {DefiRate} from '../../../../entity/defi-rate';
import {Router} from '@angular/router';

@Component({
  selector: 'app-defi-rate',
  templateUrl: './defi-rate.page.html',
  styleUrls: ['./defi-rate.page.scss'],
})
export class DefiRatePage implements OnInit {

  @Input() rateList: DefiRate[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toCoinDetail(code) {
    this.router.navigate(['coin-detail', {codeInfo: code}] );
  }
}
