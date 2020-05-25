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

  displayFullContent(id) {
    const hideText = document.getElementById(id + 'hideText');
    const content = document.getElementById(id + 'content');

    if (hideText.style.display === 'none') {
      hideText.style.display = 'block';
      content.style.maxHeight = '46px';
      content.style.overflow = 'hidden';
    } else {
      hideText.style.display = 'none';
      content.style.maxHeight = '10000px';
      content.style.overflow = 'visible';
    }
  }
}
