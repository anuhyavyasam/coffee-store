import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms';

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

  @ViewChild('f') paymentForm: NgForm; 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
orderSuccess(){
  this.router.navigate(['/ordersuccess']);
};
  onSubmit(form: NgForm){
    console.log(form);
  }}