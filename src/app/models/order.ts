import { Product } from './product';

export class Order {
    // _id : number;
    any : Product[];
    totalPrice: number;
    billingAddress: {};
    paymentInfo = {};

    constructor(any: Product[], totalPrice: number, billingAddress: {}, paymentInfo : {}){
        this.any = any;
        this.totalPrice = totalPrice;
        this.billingAddress = billingAddress;
        this.paymentInfo = paymentInfo;
    }
}
