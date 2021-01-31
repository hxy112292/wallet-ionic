import {Component, Input, OnInit} from '@angular/core';
import {CoinFlow} from '../../../../entity/coin-flow';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LoaderService} from '../../../../service/loader.service';
import {ConstantService} from '../../../../service/constant.service';
import {ToastController} from '@ionic/angular';
import {Clipboard} from '@ionic-native/clipboard/ngx';

@Component({
  selector: 'app-coin-flow',
  templateUrl: './coin-flow.page.html',
  styleUrls: ['./coin-flow.page.scss'],
})
export class CoinFlowPage implements OnInit {

  @Input() coinFlowList: CoinFlow[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private loaderService: LoaderService,
              private constant: ConstantService,
              private toastController: ToastController,
              private clipboard: Clipboard) {
  }

  ngOnInit() {
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
