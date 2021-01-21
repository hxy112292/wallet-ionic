import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {DeepNews} from '../../../entity/deep-news';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';

@Component({
  selector: 'app-deep-news-detail',
  templateUrl: './deep-news-detail.page.html',
  styleUrls: ['./deep-news-detail.page.scss'],
})
export class DeepNewsDetailPage implements OnInit {

  deepNews: DeepNews;
  deepNewsDetail: string;
  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private constant: ConstantService) {
    this.deepNews = {
      extra: undefined, id: '', short_title: '', title: ''
    };

    this.deepNewsDetail = '';
  }

  ngOnInit() {
    this.deepNews = JSON.parse(this.route.snapshot.paramMap.get('deepNewsInfo'));
    this.getDeepNewsDetail();
  }

  getDeepNewsDetail() {
    this.constant.showLoader();
    this.http.get(this.constant.baseUrl + '/liveNews/deep/detail', {
      params: {
        url: this.deepNews.extra.topic_url
      }
    }).subscribe(res => {
      this.deepNewsDetail = (res as any).result;
      this.constant.hideLoader();
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getDeepNewsDetail();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
