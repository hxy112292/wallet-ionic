import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {LoaderService} from '../../../service/loader.service';
import {ConstantService} from '../../../service/constant.service';
import {LiveNews} from '../../../entity/live-news';
import {LiveNewsComment} from '../../../entity/live-news-comment';
import {UserService} from '../../../service/user.service';
import {AlertService} from '../../../service/alert.service';
import {LiveNewsCommentLike} from '../../../entity/live-news-comment-like';

@Component({
  selector: 'app-live-news-detail',
  templateUrl: './live-news-detail.page.html',
  styleUrls: ['./live-news-detail.page.scss'],
})
export class LiveNewsDetailPage implements OnInit {

  liveNews: LiveNews;
  pageNum: number;
  pageSize: number;
  param: object;
  commentList: LiveNewsComment[];
  myComment: LiveNewsComment;

  constructor(private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute,
              private loaderService: LoaderService,
              private alertService: AlertService,
              private userService: UserService,
              private constant: ConstantService) {
    this.liveNews = new LiveNews();
    this.pageNum = 1;
    this.pageSize = 10;
    this.param = {};
    this.commentList = [];
    this.myComment = new LiveNewsComment();
  }

  ngOnInit() {
    this.liveNews.id = JSON.parse(this.route.snapshot.paramMap.get('liveNewsId'));
    this.getLiveNewsDetail();
    this.getLiveNewsComment();
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.pageNum = 1;
    this.commentList = [];
    this.getLiveNewsDetail();
    this.getLiveNewsComment();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  getLiveNewsDetail() {
    this.http.get(this.constant.walletBackendUrl + '/liveNews/detail', {
      params: {
        id: this.liveNews.id
      }
    }).subscribe( res => {
      this.liveNews = res as any;
    });
  }

  getLiveNewsComment() {

    const param = JSON.stringify({newsId: this.liveNews.id, liker: this.userService.user.id});

    this.http.get(this.constant.walletBackendUrl + '/liveNews/detail/comment/list', {
      params: {
        pageNum: this.pageNum + '',
        pageSize: this.pageSize + '',
        param
      }
    }).subscribe( res => {
      this.commentList = this.commentList.concat((res as any).result);
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
    this.myComment.newsId = this.liveNews.id;
    this.myComment.username = this.userService.user.username;
    this.http.post(this.constant.walletBackendUrl + '/liveNews/detail/comment', this.myComment).subscribe( res => {
      this.commentList = [];
      this.pageNum = 1;
      this.getLiveNewsComment();
    });
  }

  deleteMyComment(comment) {
    this.http.delete(this.constant.walletBackendUrl + '/liveNews/detail/comment', {
      params: {
        id: comment.id
      }
    }).subscribe( res => {
      this.commentList = [];
      this.pageNum = 1;
      this.getLiveNewsComment();
    });
  }

  updateMyCommentLike(commentId) {
    if (this.userService.user == null || this.userService.user.id == null || this.userService.user.id === '') {
      this.alertService.alert('请先登录，才能点赞');
      return;
    }
    const like = new LiveNewsCommentLike();
    like.commentId = commentId;
    this.http.get(this.constant.walletBackendUrl + '/liveNews/detail/comment/isLike', {
      params: {
        commentId
      }
    }).subscribe( res => {
      if (!(res as any).result) {
        this.http.post(this.constant.walletBackendUrl + '/liveNews/detail/comment/like', like).subscribe( res1 => {
          this.commentList = [];
          this.pageNum = 1;
          this.getLiveNewsComment();
        });
      } else {
        this.http.delete(this.constant.walletBackendUrl + '/liveNews/detail/comment/like', {
          params: {
            commentId
          }
        }).subscribe( res1 => {
          this.commentList = [];
          this.pageNum = 1;
          this.getLiveNewsComment();
        });
      }
    });
  }

  toUserOpenDetail(userId) {
    this.router.navigate(['user-open-detail', {userId}]);
  }

  loadMore(event) {
    console.log('Begin async operation');
    this.pageNum += 1;
    this.getLiveNewsComment();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
