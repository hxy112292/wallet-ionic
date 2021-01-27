import {ProductSku} from './product-sku';

export class CartProduct {

    id: number;

    productId: number;

    num: number;

    name: string;

    description: string;

    originalPrice: number;

    price: number;

    type: string;

    status: number;

    imageUrl: string;

    createTime: string;

    updateTime: string;

    sku: ProductSku;
}
