import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../service/constant.service';
import {LiveNews} from '../../entity/live-news';

@Component({
  selector: 'app-live-news',
  templateUrl: './live-news.page.html',
  styleUrls: ['./live-news.page.scss'],
})
export class LiveNewsPage implements OnInit {

  liveNewsList: LiveNews[];

  constructor(private http: HttpClient,
              private constant: ConstantService) { }

  ngOnInit() {
    this.getLiveNews();
  }

  getLiveNews() {
    this.constant.showLoader();
    this.http.get(this.constant.walletToolBackendUrl + '/liveNews').subscribe(res => {
      this.liveNewsList = (res as any).list[0].lives;
      this.constant.hideLoader();
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getLiveNews();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  displayFullContent(id) {
    const content = document.getElementById(id + 'content');

    if (content.style.maxHeight === '10000px') {
      content.style.maxHeight = '95px';
      content.style.overflow = 'hidden';
      content.style.display = '-webkit-box';
    } else {
      content.style.maxHeight = '10000px';
      content.style.overflow = 'visible';
      content.style.display = 'block';
    }
  }

  getMoreLiveNews(bottomId) {
    this.http.get(this.constant.walletToolBackendUrl + '/liveNews', {
      params: {
        id: bottomId
      }
    }).subscribe(res => {
      this.liveNewsList = this.liveNewsList.concat((res as any).list[0].lives);
    });
  }

  loadMore(event) {
    console.log('Begin async operation');
    if (this.liveNewsList != null && this.liveNewsList.length !== 0) {
      this.getMoreLiveNews(this.liveNewsList[this.liveNewsList.length - 1].id);
    }
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
