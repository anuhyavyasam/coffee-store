import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
@Input() cartItem : any
@Output('onQuantityDecrement') quantityDecremented: EventEmitter<any> = new EventEmitter();
@Output('onQuantityIncrement') quantityIncremented: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onQuantityDecrement() {
    this.quantityDecremented.emit(this.cartItem);
  }

  onQuantityIncrement() {
    this.quantityIncremented.emit(this.cartItem);
  }

}
