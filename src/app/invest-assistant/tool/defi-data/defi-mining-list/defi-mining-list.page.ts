import {Component, Input, OnInit} from '@angular/core';
import {DefiMiningPool} from '../../../../entity/defi-mining-pool';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {Clipboard} from '@ionic-native/clipboard/ngx';

@Component({
  selector: 'app-defi-mining-list',
  templateUrl: './defi-mining-list.page.html',
  styleUrls: ['./defi-mining-list.page.scss'],
})
export class DefiMiningListPage implements OnInit {

  @Input() miningPoolList: DefiMiningPool[];

  constructor(private router: Router,
              private toastController: ToastController,
              private clipboard: Clipboard) { }

  ngOnInit() {
  }

  toCoinDetail(code) {
    this.router.navigate(['coin-detail', {codeInfo: code}] );
  }

  async copyText(value) {
    const toast = await this.toastController.create({
      message: '地址已复制',
      duration: 2000
    });
    await toast.present();
    await this.clipboard.copy(value);
  }
}
