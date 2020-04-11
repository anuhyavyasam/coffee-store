import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-whole-bean-item',
  templateUrl: './whole-bean-item.component.html',
  styleUrls: ['./whole-bean-item.component.css']
})
export class WholeBeanItemComponent implements OnInit {
  @Input() productItem: Product;
  @Output() productSelected = new EventEmitter();
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
  handleAddtoCart() {
    this.productService.checkedOutProducts(this.productItem);
  }

}
