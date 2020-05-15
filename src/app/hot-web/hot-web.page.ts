import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../constant.service';
import {HotWeb} from '../entity/hot-web';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-hot-web',
  templateUrl: './hot-web.page.html',
  styleUrls: ['./hot-web.page.scss'],
})
export class HotWebPage implements OnInit {

  hotWebList: HotWeb[];
  options: InAppBrowserOptions;

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private inAppBrowser: InAppBrowser) {

    this.options = {
      location : 'yes',
      hidden : 'no',
      clearcache : 'yes',
      clearsessioncache : 'yes',
      zoom : 'yes',
      hardwareback : 'yes',
      mediaPlaybackRequiresUserAction : 'no',
      shouldPauseOnSuspend : 'no',
    };
  }

  ngOnInit() {

    this.getHotWeb();
  }

  getHotWeb() {
    this.http.get(this.constant.baseUrl + '/hotWeb').subscribe(res => {
      this.hotWebList = (res as any).result;
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getHotWeb();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  openWeb(url: string) {
    const target = '_self';
    this.inAppBrowser.create(url, target, this.options);
  }

  displayIntroduction(id) {
    const operation = document.getElementById(id + 'operation');
    const introduction = document.getElementById(id + 'introduction');
    if (operation.textContent === '更多>>') {
      introduction.style.display = 'block';
      operation.textContent = '收起<<';
    } else {
      introduction.style.display = 'none';
      operation.textContent = '更多>>';
    }
  }
}
