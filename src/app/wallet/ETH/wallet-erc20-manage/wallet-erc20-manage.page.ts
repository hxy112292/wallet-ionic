import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {ConstantService} from '../../../constant.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-wallet-erc20-manage',
  templateUrl: './wallet-erc20-manage.page.html',
  styleUrls: ['./wallet-erc20-manage.page.scss'],
})
export class WalletErc20ManagePage implements OnInit {

  indexErc20: number;
  indexEth: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private storage: Storage,
              private constant: ConstantService,
              private alertController: AlertController) {
  }

  ngOnInit() {
    this.indexErc20 = Number(this.route.snapshot.paramMap.get('indexErc20'));
    this.indexEth = Number(this.route.snapshot.paramMap.get('indexEth'));
  }

  async deleteErc20() {
    const alert = await this.alertController.create({
      header: '警告',
      message: '<strong>您确定要删除该币种吗？\n</strong>',
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
            this.constant.privateKeyList[this.indexEth].erc20TokenList.splice(this.indexErc20, 1);
            this.storage.set('privateKeyList', this.constant.privateKeyList);
            this.router.navigate(['wallet-ethereum-erc20-center'
              , {privateKeyInfo : JSON.stringify(this.constant.privateKeyList[this.indexEth]), index: this.indexEth}]);
          }
        }
      ]
    });
    await alert.present();
  }
}
