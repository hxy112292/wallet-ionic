import {CartProduct} from './cart-product';

export class Order {

    id: string;
    userId: number;
    productList: CartProduct[];
    totalFee: number;
    status: number;
    payNo: string;
    createTime: string;
    updateTime: string;
    paymentTime: string;
    fromAddr: string;
    toAddr: string;
}
