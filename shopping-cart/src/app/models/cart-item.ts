import { Product } from './product';
//This is your cart model
export class CartItem {
    id: number;
    productId: number;
    productName: string;
    qty: number;
    price: number;

    constructor(id: number, product: Product, qty = 0) {
        this.id = id;
        this.productId = product.id;
        this.productName = product.name;
        this.price = product.price;
        this.qty = qty;
    }
}
