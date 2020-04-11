import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-ordersuccess',
  templateUrl: './ordersuccess.component.html',
  styleUrls: ['./ordersuccess.component.css']
})
export class OrdersuccessComponent implements OnInit {

  constructor(private productService: ProductService) {
    // clear cart products from session storage
    productService.clearProducts()
   }

  ngOnInit(): void {
  }

}
