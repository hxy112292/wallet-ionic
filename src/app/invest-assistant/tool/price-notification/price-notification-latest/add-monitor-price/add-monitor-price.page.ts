import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../../../service/constant.service';
import {MonitorCoin} from '../../../../../entity/monitor-coin';
import {MonitorPrice} from '../../../../../entity/monitor-price';
import {UserService} from '../../../../../service/user.service';
import {AlertService} from '../../../../../service/alert.service';

@Component({
  selector: 'app-add-monitor-price',
  templateUrl: './add-monitor-price.page.html',
  styleUrls: ['./add-monitor-price.page.scss'],
})
export class AddMonitorPricePage implements OnInit {

  monitorCoinList: MonitorCoin[];
  monitorCoinCode: string;
  monitorPrice: MonitorPrice;
  upPriceMonitor: number;
  downPriceMonitor: number;
  upChangeMonitor: number;
  downChangeMonitor: number;

  constructor(private route: ActivatedRoute,
              private modalController: ModalController,
              private userService: UserService,
              private navParams: NavParams,
              private http: HttpClient,
              private alertService: AlertService,
              private constant: ConstantService) {
    this.monitorPrice = {
      id: '',
      code: '',
      userId: this.userService.user.id,
      upPrice: null,
      downPrice: null,
      upChangePercent: null,
      downChangePercent: null,
      notification: '',
      voice: 'false',
      sms: 'false',
      email: 'false',
      createTime: '',
      updateTime: ''
    };
    this.upPriceMonitor = null;
    this.downPriceMonitor = null;
    this.upChangeMonitor = null;
    this.downChangeMonitor = null;
  }

  ngOnInit() {
    this.getMonitorCoin();
  }

  getMonitorCoin() {
    this.http.get(this.constant.walletBackendUrl + '/monitorPrice/coin').subscribe(res => {
      this.monitorCoinList = (res as any).result;
    });
  }

  insertMonitorPrice() {

    if (this.monitorPrice.code == null || this.monitorPrice.code === '') {
      this.alertService.alert('请选择一个币种');
      return;
    }
    if (this.upPriceMonitor == null && this.downPriceMonitor == null && this.upChangeMonitor == null
        && this.downChangeMonitor == null) {
      this.alertService.alert('请至少输入一个提醒参数');
      return;
    }

    const re = /^-?[0-9]+.?[0-9]*/;

    if (this.upPriceMonitor != null && !re.test(String(this.upPriceMonitor))) {
      this.alertService.alert('请输入数字');
      return;
    }
    if (this.downPriceMonitor != null && !re.test(String(this.downPriceMonitor))) {
      this.alertService.alert('请输入数字');
      return;
    }
    if (this.upChangeMonitor != null && !re.test(String(this.upChangeMonitor))) {
      this.alertService.alert('请输入数字');
      return;
    }
    if (this.downChangeMonitor != null && !re.test(String(this.downChangeMonitor))) {
      this.alertService.alert('请输入数字');
      return;
    }

    if (this.downChangeMonitor != null && this.downChangeMonitor > 0) {
      this.downChangeMonitor = 0 - this.downChangeMonitor;
    }


    if (this.upPriceMonitor != null) {
      this.monitorPrice.upPrice = this.upPriceMonitor;
      this.monitorPrice.downPrice = null;
      this.monitorPrice.upChangePercent = null;
      this.monitorPrice.downChangePercent = null;
      this.insertHttpRequest(this.monitorPrice);
    }
    if (this.downPriceMonitor != null) {
      this.monitorPrice.upPrice = null;
      this.monitorPrice.downPrice = this.downPriceMonitor;
      this.monitorPrice.upChangePercent = null;
      this.monitorPrice.downChangePercent = null;
      this.insertHttpRequest(this.monitorPrice);
    }
    if (this.upChangeMonitor != null) {
      this.monitorPrice.upPrice = null;
      this.monitorPrice.downPrice = null;
      this.monitorPrice.upChangePercent = this.upChangeMonitor;
      this.monitorPrice.downChangePercent = null;
      this.insertHttpRequest(this.monitorPrice);
    }
    if (this.downChangeMonitor != null) {
      this.monitorPrice.upPrice = null;
      this.monitorPrice.downPrice = null;
      this.monitorPrice.upChangePercent = null;
      this.monitorPrice.downChangePercent = this.downChangeMonitor;
      this.insertHttpRequest(this.monitorPrice);
    }

    this.dismiss(null);
  }

  insertHttpRequest(monitorPrice: MonitorPrice) {
    this.http.post(this.constant.walletBackendUrl + '/monitorPrice', monitorPrice).subscribe(res => {
      this.monitorCoinList = (res as any).result;
    });
  }

  dismiss(data) {
    this.modalController.dismiss(data).then(() => {

    });
  }
}
