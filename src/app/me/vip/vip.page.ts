import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../service/constant.service';
import {UserService} from '../../service/user.service';
import {AlertService} from '../../service/alert.service';
import {Router} from '@angular/router';
import {Product} from '../../entity/product';

@Component({
  selector: 'app-vip',
  templateUrl: './vip.page.html',
  styleUrls: ['./vip.page.scss'],
})
export class VipPage implements OnInit {

  product: Product;

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private userService: UserService,
              private alertService: AlertService,
              private router: Router) {
    this.product = new Product();
  }

  ngOnInit() {
    this.getVipProduct();
  }

  getVipProduct() {
    const param = JSON.stringify({type: 'vip'});
    this.http.get(this.constant.walletToolBackendUrl + '/product/list', {
      params: {
        pageNum: '1',
        pageSize: '10',
        param
      }
    }).subscribe(res => {
      this.product = (res as any).result;
      console.log(this.product);
    });
  }
}
