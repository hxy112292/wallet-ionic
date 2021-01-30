import { Component, OnInit } from '@angular/core';
import {CoinFlow} from '../../entity/coin-flow';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LoaderService} from '../../service/loader.service';
import {ConstantService} from '../../service/constant.service';
import {ToastController} from '@ionic/angular';
import {Clipboard} from '@ionic-native/clipboard/ngx';

@Component({
  selector: 'app-coin-holder',
  templateUrl: './coin-holder.page.html',
  styleUrls: ['./coin-holder.page.scss'],
})
export class CoinHolderPage implements OnInit {

  code: string;
  coinFlowList: CoinFlow[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private loaderService: LoaderService,
              private constant: ConstantService,
              private toastController: ToastController,
              private clipboard: Clipboard) {
    this.code = '';
    this.coinFlowList = [];
  }

  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('codeInfo');
    this.getHolders();
  }

  getHolders() {
    this.loaderService.showLoader();
    this.http.get(this.constant.walletToolBackendUrl + '/listingLatest/holders', {
      params: {
        code: this.code
      }
    }).subscribe( res => {
      this.coinFlowList = res as any;
      this.loaderService.hideLoader();
    });
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
