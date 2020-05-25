import { Component, OnInit } from '@angular/core';
import {ConstantService} from '../constant.service';
import {Clipboard} from '@ionic-native/clipboard/ngx';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-github',
  templateUrl: './github.page.html',
  styleUrls: ['./github.page.scss'],
})
export class GithubPage implements OnInit {

  constructor(private constant: ConstantService,
              private clipboard: Clipboard,
              private toastController: ToastController) { }

  ngOnInit() {

  }

  async copyText() {

    const toast = await this.toastController.create({
      message: '网址已复制',
      duration: 2000
    });
    await toast.present();
    await this.clipboard.copy(this.constant.githubUrl);
  }

}
