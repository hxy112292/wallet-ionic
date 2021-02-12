import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModalController, NavParams} from '@ionic/angular';
import {UserService} from '../../../../../../service/user.service';
import {HttpClient} from '@angular/common/http';
import {AlertService} from '../../../../../../service/alert.service';
import {ConstantService} from '../../../../../../service/constant.service';
import {MonitorAddress} from '../../../../../../entity/monitor-address';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-monitor-blockchain-user-addr-add',
  templateUrl: './monitor-blockchain-user-addr-add.page.html',
  styleUrls: ['./monitor-blockchain-user-addr-add.page.scss'],
})
export class MonitorBlockchainUserAddrAddPage implements OnInit {

  monitorAddress: MonitorAddress;
  symbol: string;

  constructor(private route: ActivatedRoute,
              private modalController: ModalController,
              private userService: UserService,
              private navParams: NavParams,
              private http: HttpClient,
              private clipboard: Clipboard,
              private barcodeScanner: BarcodeScanner,
              private alertService: AlertService,
              private constant: ConstantService) {
    this.monitorAddress = {
      address: '',
      createTime: '',
      email: 'true',
      id: '',
      notification: 'on',
      phone: 'false',
      sms: 'false',
      symbol: 'BTC',
      tag: '',
      updateTime: '',
      userId: '',
      userEmail: this.userService.user.email
    };
    this.monitorAddress.email = 'true';
    this.symbol = 'BTC';
  }

  ngOnInit() {
  }

  addMonitorAddress() {
    if (this.monitorAddress.symbol == null || this.monitorAddress.symbol === '') {
      this.alertService.alert('请选择一个币种！');
      return;
    }
    if (this.monitorAddress.address == null || this.monitorAddress.address === '') {
      this.alertService.alert('地址不能为空');
      return;
    }
    if (this.monitorAddress.tag  == null || this.monitorAddress.tag === '') {
      this.alertService.alert('标签不能为空');
      return;
    }
    if (this.monitorAddress.tag.length > 25) {
      this.alertService.alert('标签不能超过25个字');
      return;
    }
    this.monitorAddress.symbol = this.symbol;
    this.monitorAddress.notification = 'on';
    this.monitorAddress.userEmail = this.userService.user.email;
    this.http.post(this.constant.walletBackendUrl + '/monitorAddress/address', this.monitorAddress).subscribe( res => {
      this.dismiss(null);
    });
  }

  dismiss(data) {
    this.modalController.dismiss(data).then(() => {

    });
  }

  qrScan() {
    this.barcodeScanner
        .scan()
        .then(barcodeData => {
          this.monitorAddress.address = barcodeData.text;
        })
        .catch(err => {
          console.log('Error', err);
        });
  }

  paste() {
    this.clipboard.paste().then((resolve: string) => {
      this.monitorAddress.address = resolve;
    });
  }
}
