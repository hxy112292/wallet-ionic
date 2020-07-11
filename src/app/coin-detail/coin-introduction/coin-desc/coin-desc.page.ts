import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-coin-desc',
  templateUrl: './coin-desc.page.html',
  styleUrls: ['./coin-desc.page.scss'],
})
export class CoinDescPage implements OnInit {

  code: string;
  coindesc: string;

  constructor(private route: ActivatedRoute,
              private modalController: ModalController,
              private navParams: NavParams) { }

  ngOnInit() {

    this.code = this.navParams.get('code');
    this.coindesc = this.navParams.get('coindesc');
  }

  dismiss(data) {
    this.modalController.dismiss(data).then(() => {

    });
  }
}
