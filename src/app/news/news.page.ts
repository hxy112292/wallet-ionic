import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  newsPage: string;

  constructor() {
    this.newsPage = 'liveNews';
  }

  ngOnInit() {
  }

}
