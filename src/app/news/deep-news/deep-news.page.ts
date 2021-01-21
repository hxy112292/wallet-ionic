import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../service/constant.service';
import {DeepNews} from '../../entity/deep-news';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deep-news',
  templateUrl: './deep-news.page.html',
  styleUrls: ['./deep-news.page.scss'],
})
export class DeepNewsPage implements OnInit {

  deepNewsList: DeepNews[];

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private router: Router) {
    this.deepNewsList = [];
  }

  ngOnInit() {
    this.getDeepNews();
  }

  getDeepNews() {
    this.constant.showLoader();
    this.http.get(this.constant.baseUrl + '/liveNews/deep').subscribe(res => {
      this.deepNewsList = (res as any).list;
      this.constant.hideLoader();
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getDeepNews();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  toDeepNewsDetail(deepNews) {
    this.router.navigate(['deep-news-detail', {deepNewsInfo: JSON.stringify(deepNews)}]);
  }

  getMoreDeepNews(bottomId) {
    this.http.get(this.constant.baseUrl + '/liveNews/deep', {
      params: {
        id: bottomId
      }
    }).subscribe(res => {
      this.deepNewsList = this.deepNewsList.concat((res as any).list);
    });
  }

  loadMore(event) {
    console.log('Begin async operation');
    if (this.deepNewsList != null && this.deepNewsList.length !== 0) {
      this.getMoreDeepNews(this.deepNewsList[this.deepNewsList.length - 1].id);
    }
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
