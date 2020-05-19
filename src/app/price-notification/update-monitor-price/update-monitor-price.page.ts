import { Component, OnInit } from '@angular/core';
import {MonitorCoin} from '../../entity/monitor-coin';
import {MonitorPrice} from '../../entity/monitor-price';
import {ActivatedRoute} from '@angular/router';
import {ModalController, NavParams} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../constant.service';

@Component({
  selector: 'app-update-monitor-price',
  templateUrl: './update-monitor-price.page.html',
  styleUrls: ['./update-monitor-price.page.scss'],
})
export class UpdateMonitorPricePage implements OnInit {

  monitorCoinList: MonitorCoin[];
  monitorCoinCode: string;
  monitorPrice: MonitorPrice;

  constructor(private route: ActivatedRoute,
              private modalController: ModalController,
              private navParams: NavParams,
              private http: HttpClient,
              private constant: ConstantService) {
    this.monitorPrice = {
      id: '',
      code: '',
      userId: this.constant.getUser().id,
      upPrice: null,
      downPrice: null,
      upChangePercent: null,
      downChangePercent: null,
      notification: '',
      voice: '',
      sms: '',
      email: '',
      createTime: '',
      updateTime: ''
    };
  }

  ngOnInit() {
    this.monitorPrice = this.navParams.get('monitorPriceInfo');
    this.monitorPrice.userId = this.constant.getUser().id;
    this.getMonitorCoin();
  }

  getMonitorCoin() {
    this.http.get(this.constant.baseUrl + '/monitorPrice/coin').subscribe(res => {
      this.monitorCoinList = (res as any).result;
    });
  }

  updateMonitorPrice() {
    this.http.put(this.constant.baseUrl + '/monitorPrice', this.monitorPrice).subscribe(res => {
      this.monitorCoinList = (res as any).result;
    });
    this.dismiss(null);
  }

  dismiss(data) {
    this.modalController.dismiss(data).then(() => {

    });
  }

}
