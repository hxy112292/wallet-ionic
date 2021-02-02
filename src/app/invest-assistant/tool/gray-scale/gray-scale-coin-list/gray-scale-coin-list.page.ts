import {Component, Input, OnInit} from '@angular/core';
import {GrayScaleCoin} from '../../../../entity/gray-scale-coin';

@Component({
  selector: 'app-gray-scale-coin-list',
  templateUrl: './gray-scale-coin-list.page.html',
  styleUrls: ['./gray-scale-coin-list.page.scss'],
})
export class GrayScaleCoinListPage implements OnInit {

  @Input() grayScaleCoinList: GrayScaleCoin[];

  constructor() { }

  ngOnInit() {
  }

}
