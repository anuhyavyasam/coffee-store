import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { MessengerService } from '../service/messenger.service';
import { Subscription } from 'rxjs';
import { Product } from '../models/product';

@Component({
    selector: 'app-cart-notification',
    templateUrl: './cart-notification.component.html',
    styleUrls: ['./cart-notification.component.css']
  })
  export class CartNotificationComponent implements OnInit {
    productCount = 0;
    messages: any[] = [];
    subscription: Subscription;
    constructor(private productService: ProductService,
        private messageService: MessengerService) {
        const products  = this.productService.getCheckedOutProducts();
        for(let product of products) {
          this.productCount += product.quantity;
        }

        this.subscription = this.messageService.getMessage().subscribe(message => {
            if (message) {
              this.productCount ++;
              this.messages.push(message);
            } else {
              // clear messages when empty message received
              this.productCount = 0;
              this.messages = [];
            }
          });
     }
  
    ngOnInit(): void {

    }

  }