import { Injectable } from '@angular/core';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class BrowserService {

  options: InAppBrowserOptions;

  constructor(public inAppBrowser: InAppBrowser) {
    this.options = {
      location : 'yes',
      hideurlbar: 'yes',
      hidden : 'no',
      clearcache : 'yes',
      clearsessioncache : 'yes',
      zoom : 'yes',
      hardwareback : 'yes',
      mediaPlaybackRequiresUserAction : 'no',
      shouldPauseOnSuspend : 'no',
    };
  }

  openBrowser(webUrl) {
    const url = webUrl;
    const target = '_self';
    this.inAppBrowser.create(url, target, this.options);
  }
}
