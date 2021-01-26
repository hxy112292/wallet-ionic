import { Injectable } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public alertController: AlertController) { }

  async alert(text: string) {
    const alert = await this.alertController.create({
      header: '提醒',
      // subHeader: subtitle,
      message: text,
      buttons: ['确定']
    });

    await alert.present();
  }
}
