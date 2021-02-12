import { Component, OnInit } from '@angular/core';
import {MonitorAddress} from '../../../../../entity/monitor-address';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../../../service/constant.service';
import {UserService} from '../../../../../service/user.service';
import {AlertController, ModalController, ToastController} from '@ionic/angular';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {MonitorCoin} from '../../../../../entity/monitor-coin';
import {AddMonitorPricePage} from '../../../price-notification/price-notification-latest/add-monitor-price/add-monitor-price.page';
import {MonitorBlockchainUserAddrAddPage} from './monitor-blockchain-user-addr-add/monitor-blockchain-user-addr-add.page';
import {UpdateMonitorPricePage} from '../../../price-notification/price-notification-latest/update-monitor-price/update-monitor-price.page';
import {MonitorBlockchainUserAddrUpdatePage} from './monitor-blockchain-user-addr-update/monitor-blockchain-user-addr-update.page';

@Component({
  selector: 'app-monitor-blockchain-user-addr',
  templateUrl: './monitor-blockchain-user-addr.page.html',
  styleUrls: ['./monitor-blockchain-user-addr.page.scss'],
})
export class MonitorBlockchainUserAddrPage implements OnInit {

  monitorAddressList: MonitorAddress[];
  symbol: string;

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private userService: UserService,
              private alertController: AlertController,
              private modalController: ModalController,
              private toastController: ToastController,
              private clipboard: Clipboard) {
    this.monitorAddressList = [];
    this.symbol = 'BTC';
  }

  ngOnInit() {
    this.getMonitorAddressList();
  }

  getMonitorAddressList() {
    this.http.get(this.constant.walletBackendUrl + '/monitorAddress/address/list').subscribe( res => {
      this.monitorAddressList = (res as any).result;
    });
  }


  doRefresh(event) {
    console.log('Begin async operation');
    this.getMonitorAddressList();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  async toAddAddr() {
    const modal = await this.modalController.create({
      component: MonitorBlockchainUserAddrAddPage,
      componentProps: {
      }
    });
    await modal.present();
    const data = ((await modal.onDidDismiss()) as any).data;
    if (data != null) {

    }
    this.getMonitorAddressList();
  }

  async toEditAddr(monitorAddress) {
    const modal = await this.modalController.create({
      component: MonitorBlockchainUserAddrUpdatePage,
      componentProps: {
        monitorAddress
      }
    });
    await modal.present();
    const data = ((await modal.onDidDismiss()) as any).data;
    if (data != null) {

    }
    this.getMonitorAddressList();
  }

  async deleteAddr(id) {
    const alert = await this.alertController.create({
      header: '警告',
      message: '<strong>您确定要删除这个地址吗？\n</strong>',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: '确定',
          handler: () => {
            this.http.delete(this.constant.walletBackendUrl + '/monitorAddress/address', {
              params: {
                id
              }
            }).subscribe(res => {
              this.getMonitorAddressList();
            });
          }
        }
      ]
    });
    await alert.present();
  }

  async copyText(address) {

    const toast = await this.toastController.create({
      message: '地址已复制',
      duration: 2000
    });
    await toast.present();
    await this.clipboard.copy(address);
  }
}
