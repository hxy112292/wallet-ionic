import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../service/constant.service';
import {UserService} from '../../service/user.service';
import {AlertService} from '../../service/alert.service';
import {Router} from '@angular/router';
import {Order} from '../../entity/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  orderList: Order[];
  status: number;
  pageNum: 1;
  pageSize: 10;

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private userService: UserService,
              private alertService: AlertService,
              private router: Router) { }

  ngOnInit() {
    this.orderList = [];
    this.getOrderList();
  }

  getOrderList() {
    const param = JSON.stringify({status: this.status});
    if (this.pageNum == null) {
      this.pageNum = 1;
    }
    if (this.pageSize == null) {
      this.pageSize = 10;
    }
    this.http.get(this.constant.walletBackendUrl + '/order/list', {
      params: {
        pageNum: this.pageNum + '',
        pageSize: this.pageSize + '',
        param
      }
    }).subscribe( res => {
      this.orderList = this.orderList.concat((res as any).result);
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.orderList = [];
    this.pageNum = 1;
    this.pageSize = 10;
    this.getOrderList();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  toOrderDetail(id) {
    this.router.navigate(['order-detail', {orderId: id}]);
  }

  loadMore(event) {
    console.log('Begin async operation');
    this.pageNum += 1;
    this.getOrderList();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
