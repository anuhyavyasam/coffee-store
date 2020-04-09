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
        productId : p.id,
        productName : p.name,
        qty : p.quantity,
        price : p.price 
      });
    });
  }

  ngOnInit() {
    // this.msg.getMsg().subscribe((product: Product) =>{
    //   this.addProductToCart(product)
    // })
    // }
    // addProductToCart(product: Product){

    //   let productExists = false;

    //   for (let i in this.cartItems){
    //     if( this.cartItems[i].productId === product.id){
    //       this.cartItems[i].qty++
    //       productExists = true
    //       break;
    //     }
    //   }

    //   if(!productExists){
    //     this.cartItems.push({
    //       productId : product.id,
    //       productName : product.name,
    //       qty : 1,
    //       price : product.price 
    //     })
    //   }
  
    // }
  }


}
  
