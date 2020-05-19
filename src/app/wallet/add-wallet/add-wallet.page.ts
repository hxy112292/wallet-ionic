import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-add-wallet',
  templateUrl: './add-wallet.page.html',
  styleUrls: ['./add-wallet.page.scss'],
})
export class AddWalletPage implements OnInit {

  constructor(private route: ActivatedRoute,
              private modalController: ModalController,
              private navParams: NavParams) { }

  ngOnInit() {
  }

  dismiss(data) {
    this.modalController.dismiss(data).then(() => {

    });
  }
}
