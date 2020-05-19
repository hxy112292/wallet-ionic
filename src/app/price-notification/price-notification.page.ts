import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../constant.service';
import {MonitorPrice} from '../entity/monitor-price';
import {CoinDescPage} from '../coin-detail/coin-desc/coin-desc.page';
import {ModalController} from '@ionic/angular';
import {AddMonitorPricePage} from './add-monitor-price/add-monitor-price.page';
import {UpdateMonitorPricePage} from './update-monitor-price/update-monitor-price.page';

@Component({
  selector: 'app-price-notification',
  templateUrl: './price-notification.page.html',
  styleUrls: ['./price-notification.page.scss'],
})
export class PriceNotificationPage implements OnInit {

  priceOnNotificationList: MonitorPrice[];
  priceOffNotificationList: MonitorPrice[];

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private modalController: ModalController) { }

  ngOnInit() {

    this.getPriceOnNotification();
    this.getPriceOffNotification();
  }

  getPriceOnNotification() {
    this.http.get(this.constant.baseUrl + '/monitorPrice', {
      params: {
        userId: this.constant.getUser().id,
        notification: 'on'
      }
    }).subscribe(res => {
      this.priceOnNotificationList = (res as any).result;
    });
  }

  getPriceOffNotification() {
    this.http.get(this.constant.baseUrl + '/monitorPrice', {
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
    this.getPriceOnNotification();
    this.getPriceOffNotification();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  async toAddMonitorPrice() {
    const modal = await this.modalController.create({
      component: AddMonitorPricePage,
      componentProps: {
      }
    });
    await modal.present();
    const data = ((await modal.onDidDismiss()) as any).data;
    if (data != null) {

    }
    this.doRefresh(null);
  }

  async toUpdateMonitorPrice(monitorPrice: MonitorPrice) {
    const modal = await this.modalController.create({
      component: UpdateMonitorPricePage,
      componentProps: {
        monitorPriceInfo: monitorPrice
      }
    });
    await modal.present();
    const data = ((await modal.onDidDismiss()) as any).data;
    if (data != null) {

    }
    this.doRefresh(null);
  }

  deleteMonitorPrice(monitorPrice: MonitorPrice) {
    monitorPrice.notification = 'off';
    this.http.put(this.constant.baseUrl + '/monitorPrice', monitorPrice).subscribe(res => {
      this.doRefresh(null);
    });
  }
}
