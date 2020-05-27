import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../constant.service';
import {GitDev} from '../../../entity/git-dev';
import {Router} from '@angular/router';

@Component({
  selector: 'app-git-dev',
  templateUrl: './git-dev.page.html',
  styleUrls: ['./git-dev.page.scss'],
})
export class GitDevPage implements OnInit {

  gitDevList: GitDev[];

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private router: Router) { }

  ngOnInit() {
    this.getGitDevInfo();
  }

  getGitDevInfo() {
    this.http.get(this.constant.baseUrl + '/github').subscribe(res => {
      this.gitDevList = (res as any).data;
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getGitDevInfo();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  toCoinDetail(code) {
    this.router.navigate(['tabs/invest-assistant/coin-detail', {codeInfo: code}] );
  }
}
