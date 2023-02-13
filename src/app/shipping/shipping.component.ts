import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  //Define a shippingCosts property
  shippingCosts!: Observable<{ type: string; price: number }[]>;

  //that sets the shippingCosts property using the getShippingPrices() method from the CartService. Initialize the shippingCosts property inside ngOnInit() method.
  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  //Inject the cart service in the ShippingComponent constructor().
  constructor(private cartService: CartService) {}
}
