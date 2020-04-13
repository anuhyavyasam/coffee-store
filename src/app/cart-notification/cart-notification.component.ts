import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { MessengerService } from '../service/messenger.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-cart-notification',
    templateUrl: './cart-notification.component.html',
    styleUrls: ['./cart-notification.component.css']
  })
  export class CartNotificationComponent implements OnInit {
    productCount;
    messages: any[] = [];
    subscription: Subscription;
    constructor(private productService: ProductService,
        private messageService: MessengerService) {
        const products = productService.getCheckedOutProducts();
        this.productCount = products.length;

        this.subscription = this.messageService.getMessage().subscribe(message => {
            if (message) {
              this.messages.push(message);
            } else {
              // clear messages when empty message received
              this.messages = [];
            }
          });
     }
  
    ngOnInit(): void {
    }

  }