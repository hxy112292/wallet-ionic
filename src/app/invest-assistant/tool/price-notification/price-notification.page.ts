import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-price-notification',
  templateUrl: './price-notification.page.html',
  styleUrls: ['./price-notification.page.scss'],
})
export class PriceNotificationPage implements OnInit {

  priceNotificationPage: string;

  constructor() {
    this.priceNotificationPage = 'priceNotificationLatest';
  }

  ngOnInit() {

  }
}
