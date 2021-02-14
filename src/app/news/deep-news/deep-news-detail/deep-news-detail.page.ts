import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {DeepNews} from '../../../entity/deep-news';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {LoaderService} from '../../../service/loader.service';
import {LiveNewsCommentLike} from '../../../entity/live-news-comment-like';
import {UserService} from '../../../service/user.service';
import {AlertService} from '../../../service/alert.service';
import {LiveNewsComment} from '../../../entity/live-news-comment';
import {DeepNewsComment} from '../../../entity/deep-news-comment';

@Component({
  selector: 'app-deep-news-detail',
  templateUrl: './deep-news-detail.page.html',
  styleUrls: ['./deep-news-detail.page.scss'],
})
export class DeepNewsDetailPage implements OnInit {

  deepNews: DeepNews;
  deepNewsDetail: string;
  pageNum: number;
  pageSize: number;
  param: object;
  commentList: DeepNewsComment[];
  myComment: DeepNewsComment;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private loaderService: LoaderService,
              private userService: UserService,
              private alertService: AlertService,
              private constant: ConstantService) {
    this.deepNews = {
      extra: undefined, id: '', short_title: '', title: ''
    };

    this.deepNewsDetail = '';

    this.pageNum = 1;
    this.pageSize = 10;
    this.param = {};
    this.commentList = [];
    this.myComment = new DeepNewsComment();
  }

  ngOnInit() {
    this.deepNews = JSON.parse(this.route.snapshot.paramMap.get('deepNewsInfo'));
    this.getDeepNewsDetail();
  }

  getDeepNewsDetail() {
    this.loaderService.showLoader();
    this.http.get(this.constant.walletBackendUrl + '/liveNews/deep/detail', {
      params: {
        url: this.deepNews.extra.topic_url
      }
    }).subscribe(res => {
      this.deepNewsDetail = (res as any).result;
      this.loaderService.hideLoader();
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getDeepNewsDetail();
    this.getDeepNewsComment();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  getDeepNewsComment() {

    const param = JSON.stringify({newsId: this.deepNews.id, liker: this.userService.user.id});

    this.http.get(this.constant.walletBackendUrl + '/liveNews/deep/detail/comment/list', {
      params: {
        pageNum: this.pageNum + '',
        pageSize: this.pageSize + '',
        param
      }
    }).subscribe( res => {
      this.commentList = (res as any).result;
    });
  }

  createMyComment() {
    if (this.userService.user == null || this.userService.user.id == null || this.userService.user.id === '') {
      this.alertService.alert('请先登录，才能评论');
      return;
    }
    if (this.myComment.content == null || this.myComment.content === '') {
      this.alertService.alert('评论不能为空');
      return;
    }
    if (this.myComment.content.length > 256) {
      this.alertService.alert('评论过长');
      return;
    }
    this.myComment.newsId = this.deepNews.id;
    this.myComment.username = this.userService.user.username;
    this.http.post(this.constant.walletBackendUrl + '/liveNews/deep/detail/comment', this.myComment).subscribe( res => {
      this.getDeepNewsComment();
    });
  }

  deleteMyComment(comment) {
    this.http.delete(this.constant.walletBackendUrl + '/liveNews/deep/detail/comment', {
      params: {
        id: comment.id
      }
    }).subscribe( res => {
      this.getDeepNewsComment();
    });
  }

  updateMyCommentLike(commentId) {
    if (this.userService.user == null || this.userService.user.id == null || this.userService.user.id === '') {
      this.alertService.alert('请先登录，才能点赞');
      return;
    }
    const like = new LiveNewsCommentLike();
    like.commentId = commentId;
    this.http.get(this.constant.walletBackendUrl + '/liveNews/deep/detail/comment/isLike', {
      params: {
        commentId
      }
    }).subscribe( res => {
      if (!(res as any).result) {
        this.http.post(this.constant.walletBackendUrl + '/liveNews/deep/detail/comment/like', like).subscribe( res1 => {
          this.getDeepNewsComment();
        });
      } else {
        this.http.delete(this.constant.walletBackendUrl + '/liveNews/deep/detail/comment/like', {
          params: {
            commentId
          }
        }).subscribe( res1 => {
          this.getDeepNewsComment();
        });
      }
    });
  }

  toUserOpenDetail(userId) {
    this.router.navigate(['user-open-detail', {userId}]);
  }

}
