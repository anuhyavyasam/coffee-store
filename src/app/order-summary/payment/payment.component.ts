import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { ApiService } from 'src/app/service/api.service';
import { Order } from 'src/app/models/order';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
 cardPattern = "^4[0-9]{12}(?:[0-9]{3})?$";
 datePattern =  "(0|1)[0-9]\/(19|20)[0-9]{2}";
 cvvPattern = "^[0-9]{3,4}$";
  defaultPaymentType = 'credit';

  paymentTypes = ['credit', 'debit', 'paypal'];

  totalPrice = 0;
  cartItems = [];

  @ViewChild('f') paymentForm: NgForm; 
  constructor(private router: Router, private productService: ProductService,
    private apiService: ApiService) { }

  ngOnInit(): void {
  }

  submitOrder(){
    const checkedOutProducts = this.productService.getCheckedOutProducts();
    console.log('** checked out peoducts**');
    checkedOutProducts.forEach(p => {
      this.totalPrice+= p.quantity * p.price;
      this.cartItems.push({
        productId : p._id,
        productName : p.name,
        category: p.category,
        qty : p.quantity,
        price : p.price 
      });
    });
    const order: Order = {
      any: this.cartItems,
      totalPrice: this.totalPrice
    };
    console.log('****order is being placed', order);
    this.apiService.saveOrder(order).subscribe((res) => {
          console.log('Order data saved successfully!', res);
          this.router.navigate(['/ordersuccess']);
        }
      );
  }}