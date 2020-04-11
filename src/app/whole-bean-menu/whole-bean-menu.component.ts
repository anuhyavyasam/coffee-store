import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ApiService } from './../service/api.service';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/models/product'

@Component({
  selector: 'app-whole-bean-menu',
  templateUrl: './whole-bean-menu.component.html',
  styleUrls: ['./whole-bean-menu.component.css']
})
export class WholeBeanMenuComponent implements OnInit {

  productList : Product[] = []
 categories = {
  ground: 'ground',
  whole: 'whole-bean'
 };

  constructor(private apiService: ApiService,
    private productService : ProductService, private router : Router) { 
    this.categories = {
      ground: 'ground',
      whole: 'whole-bean'
    };
  }

  ngOnInit(): void {
    
    this.apiService.getProducts().subscribe((data: Product[]) => {
      console.log('Data fetched!', data);
      this.productList = data;
    }
  );

  }
  onProceedToCheckout(){
    this.router.navigate(['/checkout']);
  }

}
