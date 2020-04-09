import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.css']
})
export class BillingAddressComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(){
   
}
proceedToPayment(){
  
  this.router.navigate(['/ordersuccess']);
}

}

