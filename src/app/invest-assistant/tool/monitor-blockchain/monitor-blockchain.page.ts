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

  monitorPage: string;

  constructor() {
    this.monitorPage = 'monitorBlockchainSystem';
  }

  ngOnInit() {

  }
}
