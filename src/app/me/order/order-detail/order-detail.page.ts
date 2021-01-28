import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {UserService} from '../../../service/user.service';
import {AlertService} from '../../../service/alert.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Order} from '../../../entity/order';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {ToastController} from '@ionic/angular';
import {BrowserService} from '../../../service/browser.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {

  order: Order;

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private userService: UserService,
              private alertService: AlertService,
              private browserService: BrowserService,
              private route: ActivatedRoute,
              private router: Router,
              private clipboard: Clipboard,
              private toastController: ToastController) {
    this.order = new Order();
  }

  ngOnInit() {
    this.order.id = this.route.snapshot.paramMap.get('orderId');
    this.getOrderDetail();
  }

  getOrderDetail() {
    this.http.get(this.constant.walletToolBackendUrl + '/order', {
      params: {
        id: this.order.id
      }
    }).subscribe( res => {
      this.order = (res as any).result;
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getOrderDetail();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  openHash(url: string) {
    url = 'https://ropsten.etherscan.io/tx/' + url;
      // url = 'https://etherscan.io/tx/' + url;
    this.browserService.openBrowser(url);
  }

  async copyTxHash() {

    const toast = await this.toastController.create({
      message: 'Hash已复制',
      duration: 2000
    });
    await toast.present();
    await this.clipboard.copy(this.order.payNo);
  }

  async copyAddress(address) {

    const toast = await this.toastController.create({
      message: '地址已复制',
      duration: 2000
    });
    await toast.present();
    await this.clipboard.copy(address);
  }

  toOrderPay() {
    this.router.navigate(['/wallet-eth-pay', {order: JSON.stringify(this.order)}]);
  }

  canCelOrder() {
    this.order.status = this.constant.ORDER_STATUS_CLOSED;
    this.http.put(this.constant.walletToolBackendUrl + '/order', this.order).subscribe( res => {
      this.router.navigate(['/order']);
    });
  }

  toGenerateWallet() {
    this.router.navigate(['wallet-add-choose']);
  }
}
