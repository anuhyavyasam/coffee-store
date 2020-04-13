import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.css']
})
export class BillingAddressComponent implements OnInit {
  phoneNumberPattern = "^((\\+1-?)|0)?[0-9]{10}$"; 

  @ViewChild('f') billingForm: NgForm;

  defaultEmail= ""
  defaultStreet=""
  defaultCity=""
  defaultState="MD"
  defaultZip=""

  constructor(private router: Router, private productService: ProductService) {
      
   }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    // console.log(f);
  this.productService.setBillingAddress(f.value);

  }


  proceedToPayment() {
    this.router.navigate(['/ordersuccess']);
  }

  

}

