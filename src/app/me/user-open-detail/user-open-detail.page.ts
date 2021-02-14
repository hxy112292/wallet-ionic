import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../service/constant.service';
import {UserService} from '../../service/user.service';
import {AlertService} from '../../service/alert.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../entity/user';

@Component({
  selector: 'app-user-open-detail',
  templateUrl: './user-open-detail.page.html',
  styleUrls: ['./user-open-detail.page.scss'],
})
export class UserOpenDetailPage implements OnInit {

  user: User;

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private userService: UserService,
              private alertService: AlertService,
              private route: ActivatedRoute,
              private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
    this.user.id = this.route.snapshot.paramMap.get('userId');
    this.getUserInfo();
  }

  getUserInfo() {
    this.http.get(this.constant.walletBackendUrl + '/user/info', {
      params: {
        userId: this.user.id
      }
    }).subscribe(res => {
      this.user = (res as any).result;
    });
  }

}
