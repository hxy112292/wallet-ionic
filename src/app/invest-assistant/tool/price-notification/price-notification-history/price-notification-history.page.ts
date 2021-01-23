import {Component, OnInit} from '@angular/core';
import {MonitorPrice} from '../../../../entity/monitor-price';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../../service/constant.service';

@Component({
  selector: 'app-price-notification-history',
  templateUrl: './price-notification-history.page.html',
  styleUrls: ['./price-notification-history.page.scss'],
})
export class PriceNotificationHistoryPage implements OnInit {

  priceOffNotificationList: MonitorPrice[];

  constructor(private http: HttpClient,
              private constant: ConstantService) { }

  ngOnInit() {
    this.getPriceOffNotification();
  }

  getPriceOffNotification() {
    this.http.get(this.constant.walletToolBackendUrl + '/monitorPrice', {
      params: {
        userId: this.constant.getUser().id,
        notification: 'off'
      }
    }).subscribe(res => {
      this.priceOffNotificationList = (res as any).result;
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getPriceOffNotification();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
