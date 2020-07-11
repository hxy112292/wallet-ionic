import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../constant.service';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {ModalController, ToastController} from '@ionic/angular';
import {Clipboard} from '@ionic-native/clipboard/ngx';

@Component({
  selector: 'app-coin-detail',
  templateUrl: './coin-detail.page.html',
  styleUrls: ['./coin-detail.page.scss'],
})
export class CoinDetailPage implements OnInit {

  coinPage: string;

  constructor() {

    this.coinPage = 'coinIntroduction';
  }

  ngOnInit() {


  }

}
