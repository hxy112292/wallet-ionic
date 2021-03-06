import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {HotWeb} from '../../../entity/hot-web';
import {BrowserService} from '../../../service/browser.service';

@Component({
  selector: 'app-hot-web',
  templateUrl: './hot-web.page.html',
  styleUrls: ['./hot-web.page.scss'],
})
export class HotWebPage implements OnInit {

  hotWebList: HotWeb[];

  constructor(private http: HttpClient,
              private browserService: BrowserService,
              private constant: ConstantService) {
  }

  ngOnInit() {

    this.getHotWeb();
  }

  getHotWeb() {
    this.http.get(this.constant.walletBackendUrl + '/hotWeb').subscribe(res => {
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
    this.browserService.openBrowser(url);
  }

  displayFullContent(id) {
    const hideText = document.getElementById(id + 'hideText');
    const content = document.getElementById(id + 'content');

    if (hideText.style.display === 'none') {
      hideText.style.display = 'block';
      content.style.maxHeight = '40px';
      content.style.overflow = 'hidden';
    } else {
      hideText.style.display = 'none';
      content.style.maxHeight = '10000px';
      content.style.overflow = 'visible';
    }
  }
}
