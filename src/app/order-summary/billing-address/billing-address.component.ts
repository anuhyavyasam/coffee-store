import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.css']
})
export class BillingAddressComponent implements OnInit {

  @ViewChild('f') billingForm: NgForm;

  defaultEmail= "abc@gmail.com"
  defaultStreet="8000 Towson way"
  defaultCity="Towson"
  defaultState="MD"
  defaultZip="20988"

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form)
  }


  proceedToPayment() {
    this.router.navigate(['/ordersuccess']);
  }

}

