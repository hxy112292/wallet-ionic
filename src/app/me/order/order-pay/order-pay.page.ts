import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {HttpClient} from '@angular/common/http';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {ConstantService} from '../../../service/constant.service';
import {AlertController, ModalController, ToastController} from '@ionic/angular';
import {AlertService} from '../../../service/alert.service';
import {StorageService} from '../../../service/storage.service';
import {ReceiverAddr} from '../../../entity/receiver-addr';
import {Order} from '../../../entity/order';

@Component({
  selector: 'app-order-pay',
  templateUrl: './order-pay.page.html',
  styleUrls: ['./order-pay.page.scss'],
})
export class OrderPayPage implements OnInit {

  receiverAddr: ReceiverAddr;
  order: Order;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private barcodeScanner: BarcodeScanner,
              private http: HttpClient,
              private clipboard: Clipboard,
              private constant: ConstantService,
              private alertController: AlertController,
              private alertService: AlertService,
              private storage: StorageService,
              private modalController: ModalController,
              private toastController: ToastController) {
    this.receiverAddr = new ReceiverAddr();
    this.order = new Order();
  }

  ngOnInit() {
    this.getReceiverAddr();
    this.order = JSON.parse(this.route.snapshot.paramMap.get('order'));
  }

  getReceiverAddr() {
    this.http.get(this.constant.walletToolBackendUrl + '/order/receiverAddr').subscribe( res => {
      this.receiverAddr = (res as any).result;
    });
  }

  async copyText() {

    const toast = await this.toastController.create({
      message: '地址已复制',
      duration: 2000
    });
    await toast.present();
    await this.clipboard.copy(this.receiverAddr.receiveAddr);
  }
}
