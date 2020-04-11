import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/service/messenger.service';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [];
  cartTotal = 0;

  constructor(private msg : MessengerService, productService: ProductService) { 
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
}
  
