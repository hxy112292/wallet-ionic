import { Component, OnInit } from '@angular/core';
import {CoinFlow} from '../../entity/coin-flow';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LoaderService} from '../../service/loader.service';
import {ConstantService} from '../../service/constant.service';
import {ToastController} from '@ionic/angular';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {CoinHotSocial} from '../../entity/coin-hot-social';

@Component({
  selector: 'app-coin-hot-social',
  templateUrl: './coin-hot-social.page.html',
  styleUrls: ['./coin-hot-social.page.scss'],
})
export class CoinHotSocialPage implements OnInit {

  code: string;
  coinHotSocial: CoinHotSocial;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private loaderService: LoaderService,
              private constant: ConstantService,
              private toastController: ToastController,
              private clipboard: Clipboard) {
    this.code = '';
    this.coinHotSocial = new CoinHotSocial();
  }

  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('codeInfo');
    this.getHotSocial();
  }

  getHotSocial() {
    this.loaderService.showLoader();
    this.http.get(this.constant.walletToolBackendUrl + '/listingLatest/hotSocial', {
      params: {
        code: this.code
      }
    }).subscribe( res => {
      this.coinHotSocial = res as any;
      this.loaderService.hideLoader();
    });
  }

}
