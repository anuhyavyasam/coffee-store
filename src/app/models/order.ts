import { Product } from './product';

export class Order {
    // _id : number;
    any : Product[];
    totalPrice: number;

    constructor(any: Product[], totalPrice: number){
        this.any = any;
        this.totalPrice = totalPrice;
    }
}
