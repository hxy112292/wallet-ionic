import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../constant.service';
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
    this.http.get(this.constant.baseUrl + '/liveNews').subscribe(res => {
      this.liveNewsList = (res as any).list[0].lives;
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
    const hideText = document.getElementById(id + 'hideText');
    const content = document.getElementById(id + 'content');

    if (hideText.style.display === 'none') {
      hideText.style.display = 'block';
      content.style.maxHeight = '100px';
      content.style.overflow = 'hidden';
    } else {
      hideText.style.display = 'none';
      content.style.maxHeight = '10000px';
      content.style.overflow = 'visible';
    }
  }
}
