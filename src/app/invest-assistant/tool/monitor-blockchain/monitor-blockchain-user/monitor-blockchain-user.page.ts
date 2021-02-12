import { Component, OnInit } from '@angular/core';
import {TxHistory} from '../../../../entity/tx-history';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../../service/constant.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-monitor-blockchain-user',
  templateUrl: './monitor-blockchain-user.page.html',
  styleUrls: ['./monitor-blockchain-user.page.scss'],
})
export class MonitorBlockchainUserPage implements OnInit {

  userTxHistoryList: TxHistory[];
  userPageNum: 1;
  userPageSize: 10;

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private router: Router) { }

  ngOnInit() {
    this.userTxHistoryList = [];
    this.getUserTxHistory();
  }

  getUserTxHistory() {
    const param = JSON.stringify({symbol: 'BTC'});
    if (this.userPageNum == null) {
      this.userPageNum = 1;
    }
    if (this.userPageSize == null) {
      this.userPageSize = 10;
    }
    this.http.get(this.constant.walletBackendUrl + '/monitorAddress/history/user', {
      params: {
        pageNum: this.userPageNum + '',
        pageSize: this.userPageSize + '',
        param
      }
    }).subscribe(res => {
      this.userTxHistoryList = this.userTxHistoryList.concat((res as any).result);
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.userPageNum = 1;
    this.userPageSize = 10;
    this.userTxHistoryList = [];
    this.getUserTxHistory();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  toTxDetail(txHistory: TxHistory) {
    this.router.navigate(['tx-detail', {txHistoryInfo: JSON.stringify(txHistory)}]);
  }

  loadMore(event) {
    console.log('Begin async operation');
    this.userPageNum += 1;
    this.getUserTxHistory();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  toAddrManage() {
    this.router.navigate(['monitor-blockchain-user-addr']);
  }
}
