import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  defaultPaymentType = 'credit';

  paymentTypes = ['credit', 'debit', 'paypal'];

  @ViewChild('f') paymentForm: NgForm; 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  orderSuccess(){
    this.router.navigate(['/ordersuccess']);
  }

  onSubmit(form: NgForm){
    console.log(form)
  }
}
