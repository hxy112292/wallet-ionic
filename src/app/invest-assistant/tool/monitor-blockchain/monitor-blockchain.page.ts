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

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private router: Router) { }

  ngOnInit() {
    this.getTxHistory();
  }

  getTxHistory() {
    this.http.get(this.constant.walletToolBackendUrl + '/monitorAddress/history', {
      params: {
        symbol: 'BTC'
      }
    }).subscribe(res => {
      this.txHistoryList = (res as any).result;
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getTxHistory();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  toTxDetail(txHistory: TxHistory) {
    this.router.navigate(['tx-detail', {txHistoryInfo: JSON.stringify(txHistory)}]);
  }
}
