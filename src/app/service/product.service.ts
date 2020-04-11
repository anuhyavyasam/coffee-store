import { Injectable, Inject } from '@angular/core';
import { Product } from 'src/app/models/product';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'EXTRA COARSE GRIND', 'ground', 'Cold Brewing', 15, "https://ineedcoffee.com/wp-content/uploads/2013/10/1-toddy-grind.jpg"),
    new Product(2, 'COARSE GRIND', 'ground', 'French Press', 18, "https://ineedcoffee.com/wp-content/uploads/2013/10/2-french-press-grind.jpg"),
    new Product(3, 'MEDIUM COARSE', 'ground', 'Cafe Solo', 20, "https://ineedcoffee.com/wp-content/uploads/2013/10/6-medium-coarse-grind.jpg"),
    new Product(4, 'MEDIUM GRIND', 'ground', 'Drip Brewing', 15, "https://ineedcoffee.com/wp-content/uploads/2013/10/3-drip-grind.jpg"),
    new Product(5, 'MEDIUM FINE', 'ground', 'Immersion', 18, "https://ineedcoffee.com/wp-content/uploads/2013/10/7-medium-fine-grind.jpg"),
    new Product(6, 'MEDIUM ROAST', 'ground', 'French Press', 20, "https://ineedcoffee.com/wp-content/uploads/2013/10/2-french-press-grind.jpg"),
    new Product(7, 'FINE GRIND', 'ground', 'Espresso', 15, "https://ineedcoffee.com/wp-content/uploads/2013/10/4-espresso-grind.jpg"),
    new Product(8, 'EXTRA FINE GRIND', 'ground', 'Turkish Coffee', 20, "https://ineedcoffee.com/wp-content/uploads/2013/10/5-turkish-grind.jpg"),
    new Product(9, 'Arabica', 'whole-bean', 'Coffea arabica', 30, "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcnB-gTwa2eWmNrdwmkUQ91PoYSTXiMjgYlD1464XsvhAHUMqB&usqp=CAU"),
    new Product(10, 'Robusta', 'whole-bean', 'Coffea caniphora', 20, "https://sc02.alicdn.com/kf/UTB8s_NBHxHEXKJk43Jeq6yeeXXaS/robusta-coffee-price.jpg"),
    new Product(11, 'Liberica', 'whole-bean', 'Coffea liberica', 15, "https://img.jakpost.net/c/2018/08/07/2018_08_07_50875_1533636394._large.jpg"),
    new Product(12, 'Excelsa', 'whole-bean', 'Coffea excelsa', 20, "https://images-na.ssl-images-amazon.com/images/I/51EGHd7Io-L._AC_SY400_.jpg")
  ];

  STORAGE_KEY = 'productCart';

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) { }

  getProducts(): Product[] {
    //TODO : Populate products from an api and return an Observable
    return this.products;
  }

  checkedOutProducts(selected: Product) {
    let isNewSelection = true;

    // set the data into session storage
    const existingCartItems: Product[] = this.storage.get(this.STORAGE_KEY) || [];
    // key exists in session storage
    if (existingCartItems && existingCartItems.length > 0) {
      for (const product of existingCartItems) {
        // if existing item, just update the quantity
        if (product.id === selected.id) {
          product.quantity++;
          isNewSelection = false;
          break;
        }
      }

      // add new item into the cart
      if (isNewSelection) {
        selected.quantity = 1;
        existingCartItems.push(selected);
      }
    } else {
      selected.quantity = 1;
      existingCartItems.push(selected);
    }
    // set the cart data into session storage
    this.storage.set(this.STORAGE_KEY, existingCartItems);
  }


  getCheckedOutProducts(): Product[] {
    return this.storage.get(this.STORAGE_KEY) || [];
  }

  clearProducts() {
    if (this.storage.get(this.STORAGE_KEY) !== null) {
      this.storage.remove(this.STORAGE_KEY);
    }
  }

}
