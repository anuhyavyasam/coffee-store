import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/service/messenger.service';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';
import {AlertService} from 'src/app/_alert';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [];
  cartTotal = 0;

  options = {
    autoClose: false,
    keepAfterRouteChange: false
  };

  constructor(private msg : MessengerService, private productService: ProductService,
    private alertService: AlertService) { 
    const checkedOutProducts = productService.getCheckedOutProducts();
    checkedOutProducts.forEach(p => {
      this.cartTotal+= p.quantity * p.price;
      this.cartItems.push({
        _id : p._id,
        imageUrl : p.imageUrl,
        name : p.name,
        quantity : p.quantity,
        price : p.price 
      });
    });
  }

  ngOnInit() {
  }

  onQuantityDecremented(selected) {
    for(let cartItem of this.cartItems ) {
      if(selected._id === cartItem._id) {
        if((cartItem.quantity - 1) < 0) {
          this.alertService.error('Quantity cannot be negative', this.options);
          break;
        }
        this.productService.checkedOutProducts(selected, true);
        cartItem.quantity--;
        this.cartTotal-= selected.price;
        break;
      }
    }
  }

  onQuantityIncremented(selected) {
    this.productService.checkedOutProducts(selected);
    for(let cartItem of this.cartItems ) {
      if(selected._id === cartItem._id) {
        cartItem.quantity++;
        this.cartTotal+= Number(selected.price);
        break;
      }
    }
  }
}
  
