import {ProductSku} from './product-sku';

export class Product {

    id: number;

    name: string;

    description: string;

    originalPrice: number;

    price: number;

    type: string;

    status: number;

    imageUrl: string;

    createTime: string;

    updateTime: string;

    skuList: ProductSku[];
}
