import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConstantService} from '../../service/constant.service';
import {UserService} from '../../service/user.service';
import {AlertService} from '../../service/alert.service';
import {Router} from '@angular/router';
import {Product} from '../../entity/product';
import {ProductSku} from '../../entity/product-sku';
import {Order} from '../../entity/order';
import {CartProduct} from '../../entity/cart-product';

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
    this.sku = {id: 1, price: 0, sku: ''};
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
    const cartProduct = new CartProduct();
    cartProduct.productId = this.product.id;
    cartProduct.num = 1;
    cartProduct.name = this.product.name;
    cartProduct.description = this.product.description;
    cartProduct.originalPrice = this.product.originalPrice;
    cartProduct.price = this.product.price;
    cartProduct.type = this.product.type;
    cartProduct.imageUrl = this.product.imageUrl;
    cartProduct.sku = this.product.skuList.find((item) => {if (item.id === this.sku.id) { return item; }});
    this.order.productList = [cartProduct];
    this.order.totalFee = cartProduct.sku.price;
    this.http.post(this.constant.walletBackendUrl + '/order', this.order).subscribe( res => {
      this.order = (res as any).result;
      this.router.navigate(['/wallet-eth-pay', {order: JSON.stringify(this.order)}]);
    });
  }
}
