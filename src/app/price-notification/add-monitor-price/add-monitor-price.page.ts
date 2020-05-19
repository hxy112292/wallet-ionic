import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../constant.service';
import {MonitorCoin} from '../../entity/monitor-coin';
import {MonitorPrice} from '../../entity/monitor-price';

@Component({
  selector: 'app-add-monitor-price',
  templateUrl: './add-monitor-price.page.html',
  styleUrls: ['./add-monitor-price.page.scss'],
})
export class AddMonitorPricePage implements OnInit {

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
      voice: '',
      sms: '',
      email: '',
      createTime: '',
      updateTime: ''
    };
  }

  ngOnInit() {
    this.getMonitorCoin();
  }

  getMonitorCoin() {
    this.http.get(this.constant.baseUrl + '/monitorPrice/coin').subscribe(res => {
      this.monitorCoinList = (res as any).result;
    });
  }

  insertMonitorPrice() {
    this.http.post(this.constant.baseUrl + '/monitorPrice', this.monitorPrice).subscribe(res => {
      this.monitorCoinList = (res as any).result;
    });
    this.dismiss(null);
  }

  dismiss(data) {
    this.modalController.dismiss(data).then(() => {

    });
  }
}
