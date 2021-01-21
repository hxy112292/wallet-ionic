import { Component, OnInit } from '@angular/core';
import {MonitorCoin} from '../../../../../entity/monitor-coin';
import {MonitorPrice} from '../../../../../entity/monitor-price';
import {ActivatedRoute} from '@angular/router';
import {ModalController, NavParams} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../../../service/constant.service';

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

    if (this.monitorPrice.code == null || this.monitorPrice.code === '') {
      this.constant.alert('请选择一个币种');
      return;
    }
    if (this.monitorPrice.upPrice == null && this.monitorPrice.downPrice == null && this.monitorPrice.upChangePercent == null
        && this.monitorPrice.downChangePercent == null) {
      this.constant.alert('请至少输入一个提醒参数');
      return;
    }

    const re = /^-?[0-9]+.?[0-9]*/;

    if (this.monitorPrice.upPrice != null && !re.test(String(this.monitorPrice.upPrice))) {
      this.constant.alert('请输入数字');
      return;
    }
    if (this.monitorPrice.downPrice != null && !re.test(String(this.monitorPrice.downPrice))) {
      this.constant.alert('请输入数字');
      return;
    }
    if (this.monitorPrice.upChangePercent != null && !re.test(String(this.monitorPrice.upChangePercent))) {
      this.constant.alert('请输入数字');
      return;
    }
    if (this.monitorPrice.downChangePercent != null && !re.test(String(this.monitorPrice.downChangePercent))) {
      this.constant.alert('请输入数字');
      return;
    }

    if (this.monitorPrice.downChangePercent != null && this.monitorPrice.downChangePercent > 0) {
      this.monitorPrice.downChangePercent = 0 - this.monitorPrice.downChangePercent;
    }

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
