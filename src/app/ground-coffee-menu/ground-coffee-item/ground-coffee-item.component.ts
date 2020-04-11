import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/service/messenger.service';
import { ProductService } from 'src/app/service/product.service';



@Component({
  selector: 'app-ground-coffee-item',
  templateUrl: './ground-coffee-item.component.html',
  styleUrls: ['./ground-coffee-item.component.css']
})
export class GroundCoffeeItemComponent implements OnInit {
  @Input() productItem: Product;

  @Output() productSelected = new EventEmitter();


  constructor(private msg: MessengerService, private productService: ProductService) { }

  ngOnInit() {
  }

  handleAddtoCart() {
    this.productService.checkedOutProducts(this.productItem);
  }

  handleRemoveFromCart() {

  }
}




