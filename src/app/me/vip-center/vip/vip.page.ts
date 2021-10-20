import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../../service/constant.service';
import {UserService} from '../../../service/user.service';
import {AlertService} from '../../../service/alert.service';
import {Router} from '@angular/router';
import {Product} from '../../../entity/product';
import {ProductSku} from '../../../entity/product-sku';
import {Order} from '../../../entity/order';
import {CartProduct} from '../../../entity/cart-product';

@Component({
  selector: 'app-vip',
  templateUrl: './vip.page.html',
  styleUrls: ['./vip.page.scss'],
})
export class VipPage implements OnInit {

  product: Product;
  sku: ProductSku;
  order: Order;

  constructor(private http: HttpClient,
              private constant: ConstantService,
              private userService: UserService,
              private alertService: AlertService,
              private router: Router) {
    this.product = {
      createTime: '',
      description: '',
      id: 0,
      imageUrl: '',
      name: '',
      originalPrice: 0,
      price: 0,
      skuList: [],
      status: 0,
      type: '',
      updateTime: ''
    };
    this.sku = {id: 1, price: 2, sku: ''};
    this.order = {
      fromAddr: '',
      toAddr: '',
      createTime: '', id: '', payNo: '', paymentTime: '', productList: [], status: 0, totalFee: 0, updateTime: '', userId: 0};
  }

  ngOnInit() {
    this.getVipProduct();
  }

  getVipProduct() {
    const param = JSON.stringify({type: 'vip'});
    this.http.get(this.constant.walletBackendUrl + '/product/list', {
      params: {
        pageNum: '1',
        pageSize: '10',
        param
      }
    }).subscribe(res => {
      this.product = (res as any).result[0];
      this.sku = this.product.skuList[0];
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.getVipProduct();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  toGenerateWallet() {
    this.router.navigate(['wallet-add-choose']);
  }

  createOrder() {
    this.router.navigate(['/wallet-eth-pay', {product: JSON.stringify(this.product), sku: JSON.stringify(this.sku)}]);
  }

  radioGroupChange(event: any) {
    const skuId = Number(event.detail.value);
    this.sku = this.product.skuList.filter(item => item.id === skuId)[0];
  }
}
