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
        productId : p._id,
        productImage : p.imageUrl,
        productName : p.name,
        qty : p.quantity,
        price : p.price 
      });
    });
  }

  ngOnInit() {
  }

  onQuantityDecremented(selected) {
    for(let cartItem of this.cartItems ) {
      if(selected.productId === cartItem.productId) {
        if((cartItem.qty - 1) < 0) {
          this.alertService.error('Quantity cannot be negative', this.options);
          break;
        }
        cartItem.qty--;
        this.cartTotal-= selected.price;
        break;
      }
    }
  }

  onQuantityIncremented(selected) {
    for(let cartItem of this.cartItems ) {
      if(selected.productId === cartItem.productId) {
        cartItem.qty++;
        this.cartTotal+= Number(selected.price);
        break;
      }
    }
  }
}
  
