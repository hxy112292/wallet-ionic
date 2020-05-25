import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-exchange-desc',
  templateUrl: './exchange-desc.page.html',
  styleUrls: ['./exchange-desc.page.scss'],
})
export class ExchangeDescPage implements OnInit {

  code: string;
  desc: string;

  constructor(private route: ActivatedRoute,
              private modalController: ModalController,
              private navParams: NavParams) { }

  ngOnInit() {

    this.code = this.navParams.get('code');
    this.desc = this.navParams.get('desc');
  }

  dismiss(data) {
    this.modalController.dismiss(data).then(() => {

    });
  }

}
