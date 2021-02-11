import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {TxHistory} from '../../../entity/tx-history';
import {Router} from '@angular/router';

@Component({
  selector: 'app-monitor-blockchain',
  templateUrl: './monitor-blockchain.page.html',
  styleUrls: ['./monitor-blockchain.page.scss'],
})
export class MonitorBlockchainPage implements OnInit {

  txHistoryList: TxHistory[];
  pageNum: 1;
  pageSize: 10;

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private router: Router) { }

  ngOnInit() {
    this.txHistoryList = [];
    this.getTxHistory();
  }

  getTxHistory() {
    const param = JSON.stringify({symbol: 'BTC'});
    if (this.pageNum == null) {
      this.pageNum = 1;
    }
    if (this.pageSize == null) {
      this.pageSize = 10;
    }
    this.http.get(this.constant.walletBackendUrl + '/monitorAddress/history', {
      params: {
        pageNum: this.pageNum + '',
        pageSize: this.pageSize + '',
        param
      }
    }).subscribe(res => {
      this.txHistoryList = this.txHistoryList.concat((res as any).result);
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.pageNum = 1;
    this.pageSize = 10;
    this.txHistoryList = [];
    this.getTxHistory();
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
    this.pageNum += 1;
    this.getTxHistory();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
