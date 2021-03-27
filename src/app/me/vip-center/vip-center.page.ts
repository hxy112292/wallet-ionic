import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vip-center',
  templateUrl: './vip-center.page.html',
  styleUrls: ['./vip-center.page.scss'],
})
export class VipCenterPage implements OnInit {

  vipPage: string;

  constructor() {
    this.vipPage = 'vip';
  }

  ngOnInit() {
  }

}
