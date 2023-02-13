import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //define an items property to store the array of the current products in the cart
  items: Product[] = [];

  // Inject HttpClient into the CartService constructor().
  constructor(
    private http: HttpClient
  ) { }

  //appends a product to an array of items
  addToCart(product: Product) {
    this.items.push(product);
  }

  //collects items added to cart and returns each item with its associated quantity
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  //define a new getShippingPrices() method that uses the HttpClient get() method.
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>
    ('/assets/shipping.json');
  }
}
