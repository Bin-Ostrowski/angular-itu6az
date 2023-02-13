import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  //Define the items property to store the products in the cart
  //sets the items using the CartService getItems() method
  items = this.cartService.getItems();

  //Inject the CartService so that the CartComponent can use it
  constructor(
    private cartService: CartService
  ) { }
}
