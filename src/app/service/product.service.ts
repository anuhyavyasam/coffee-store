import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'EXTRA COARSE GRIND', 'ground', 'Cold Brewing', 15, "https://www.inspiredtaste.net/wp-content/uploads/2016/07/Cold-Brew-Recipe-1.jpg"),
    new Product(2, 'COARSE GRIND', 'ground', 'French Press', 18),
    new Product(3, 'MEDIUM COARSE', 'ground', 'Cafe Solo', 20),
    new Product(4, 'MEDIUM GRIND','ground', 'Drip Brewing', 15),
    new Product(5, 'MEDIUM FINE', 'ground', 'Immersion Dripper', 18),
    new Product(6, 'MEDIUM ROAST', 'ground', 'Breakfast Blend', 20),
    new Product(7, 'FINE GRIND', 'ground', 'Espresso', 15),
    new Product(8, 'EXTRA FINE GRIND', 'ground','Turkish Coffee', 20),

    new Product(9, 'Whole bean', 'whole-bean', 'Cold Brewing', 39)
  ];

  checkedProducts: Product[] = [];

  constructor() { }

  getProducts(): Product[] {
    //TODO : Populate products from an api and return an Observable
    return this.products;
  }

  
  checkedOutProducts(selected: Product) {
    let isNewSelection = true;
    for (let product of this.checkedProducts) {
      if (product.id === selected.id) {
        product.quantity++;
        isNewSelection = false;
        break;
      }
    }

    if(isNewSelection) {
      selected.quantity = 1;
      this.checkedProducts.push(selected);
    }
  }

  getCheckedOutProducts() : Product[] {
    return this.checkedProducts;
  }

}
