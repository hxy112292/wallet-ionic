import { Component, OnInit } from '@angular/core';
import {MonitorPrice} from '../../../../entity/monitor-price';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../../service/constant.service';
import {ModalController} from '@ionic/angular';
import {AddMonitorPricePage} from './add-monitor-price/add-monitor-price.page';
import {UpdateMonitorPricePage} from './update-monitor-price/update-monitor-price.page';

@Component({
  selector: 'app-price-notification-latest',
  templateUrl: './price-notification-latest.page.html',
  styleUrls: ['./price-notification-latest.page.scss'],
})
export class PriceNotificationLatestPage implements OnInit {

  priceOnNotificationList: MonitorPrice[];

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private modalController: ModalController) { }

  ngOnInit() {

    this.getPriceOnNotification();
  }

  getPriceOnNotification() {
    this.http.get(this.constant.walletToolBackendUrl + '/monitorPrice', {
      params: {
        userId: this.constant.getUser().id,
        notification: 'on'
      }
    }).subscribe(res => {
      this.priceOnNotificationList = (res as any).result;
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getPriceOnNotification();
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
    this.getPriceOnNotification();
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
    this.getPriceOnNotification();
  }

  deleteMonitorPrice(monitorPrice: MonitorPrice) {
    monitorPrice.notification = 'off';
    monitorPrice.email = 'false';
    monitorPrice.voice = 'false';
    monitorPrice.sms = 'false';
    this.http.put(this.constant.walletToolBackendUrl + '/monitorPrice', monitorPrice).subscribe(res => {
      this.doRefresh(null);
    });
  }

}
