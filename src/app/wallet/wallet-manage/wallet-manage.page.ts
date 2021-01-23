import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PrivateKey} from '../../entity/private-key';
import {ConstantService} from '../../service/constant.service';
import {AlertController, ModalController} from '@ionic/angular';
import {StorageService} from '../../service/storage.service';
import {WalletExportKeyPage} from './wallet-export-key/wallet-export-key.page';
import {WalletExportMnemonicPage} from './wallet-export-mnemonic/wallet-export-mnemonic.page';

@Component({
  selector: 'app-wallet-manage',
  templateUrl: './wallet-manage.page.html',
  styleUrls: ['./wallet-manage.page.scss'],
})
export class WalletManagePage implements OnInit {

  privateKey: PrivateKey;
  passwordInput: string;
  index: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private constant: ConstantService,
              private alertController: AlertController,
              private storage: StorageService,
              private modalController: ModalController) {

    this.passwordInput = '';
  }

  ngOnInit() {
    this.privateKey = JSON.parse(this.route.snapshot.paramMap.get('privateKeyInfo'));
    this.index = Number(this.route.snapshot.paramMap.get('index'));
  }

  async exportKey() {
    const alert = await this.alertController.create({
      header: '导出密钥',
      inputs: [
        {
          name: 'password',
          type: 'password',
          placeholder: '请输入密码'
        }
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: '确定',
          handler: (alertData) => {
            if (alertData.password !== this.privateKey.password) {
              this.constant.alert('密码错误！');
            } else {
              this.toExportTextKey();
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async exportMnemonic() {
    const alert = await this.alertController.create({
      header: '导出助记词',
      inputs: [
        {
          name: 'password',
          type: 'password',
          placeholder: '请输入密码'
        }
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: '确定',
          handler: (alertData) => {
            if (alertData.password !== this.privateKey.password) {
              this.constant.alert('密码错误！');
            } else {
              this.toExportTextMnemonic();
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async deleteWalletByPassword() {
    const alert = await this.alertController.create({
      header: '请输入密码',
      inputs: [
        {
          name: 'password',
          type: 'password',
          placeholder: '请输入密码'
        }
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: '确定',
          handler: (alertData) => {
            if (alertData.password !== this.privateKey.password) {
              this.constant.alert('密码错误！');
            } else {
              this.constant.privateKeyList.splice(this.index, 1);
              this.constant.privateKeyListLength = this.constant.privateKeyListLength - 1;
              this.storage.set('privateKeyList', this.constant.privateKeyList);
              this.storage.set('privateKeyListLength', this.constant.privateKeyListLength);
              this.router.navigate(['tabs/wallet']);
            }
          }
        }
      ]
    });
    await alert.present();
  }


  async deleteWallet() {
    const alert = await this.alertController.create({
      header: '警告',
      message: '<strong>您确定要删除这个钱包吗？\n</strong>',
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
            this.deleteWalletByPassword();
          }
        }
      ]
    });
    await alert.present();
  }

  async toExportTextKey() {
    const modal = await this.modalController.create({
      component: WalletExportKeyPage,
      componentProps: {
        privateKey: this.privateKey
      }
    });
    await modal.present();
    const data = ((await modal.onDidDismiss()) as any).data;
    if (data != null) {

    }
  }

  async toExportTextMnemonic() {
    const modal = await this.modalController.create({
      component: WalletExportMnemonicPage,
      componentProps: {
        privateKey: this.privateKey
      }
    });
    await modal.present();
    const data = ((await modal.onDidDismiss()) as any).data;
    if (data != null) {

    }
  }

  forgetPassword() {
    if (this.privateKey.isHDWallet === true) {
      this.router.navigate(['wallet-mnemonic-password', {index: this.index, privateKeyInfo: JSON.stringify(this.privateKey)}]);
    } else {
      this.router.navigate(['wallet-private-key-password', {index: this.index, privateKeyInfo: JSON.stringify(this.privateKey)}]);
    }
  }
}
