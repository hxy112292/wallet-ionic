import { Component, OnInit } from '@angular/core';
import {TxHistory} from '../../../../entity/tx-history';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../../service/constant.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-monitor-blockchain-system',
  templateUrl: './monitor-blockchain-system.page.html',
  styleUrls: ['./monitor-blockchain-system.page.scss'],
})
export class MonitorBlockchainSystemPage implements OnInit {

  systemTxHistoryList: TxHistory[];
  systemPageNum: 1;
  systemPageSize: 10;

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private router: Router) { }

  ngOnInit() {
    this.systemTxHistoryList = [];
    this.getSystemTxHistory();
  }

  getSystemTxHistory() {
    const param = JSON.stringify({symbol: 'BTC'});
    if (this.systemPageNum == null) {
      this.systemPageNum = 1;
    }
    if (this.systemPageSize == null) {
      this.systemPageSize = 10;
    }
    this.http.get(this.constant.walletBackendUrl + '/monitorAddress/history', {
      params: {
        pageNum: this.systemPageNum + '',
        pageSize: this.systemPageSize + '',
        param
      }
    }).subscribe(res => {
      this.systemTxHistoryList = this.systemTxHistoryList.concat((res as any).result);
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.systemPageNum = 1;
    this.systemPageSize = 10;
    this.systemTxHistoryList = [];
    this.getSystemTxHistory();
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
    this.systemPageNum += 1;
    this.getSystemTxHistory();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
