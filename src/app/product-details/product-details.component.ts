import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//import products array
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  
  //define product property
  product: Product | undefined;
  
  // Inject ActivatedRoute into the constructor() by adding private route: ActivatedRoute as an argument 
  // Inject the cart service 
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) {}
    //ActivatedRoute is specific to each component that the Angular Router loads. ActivatedRoute contains information about the route and the route's parameters.By injecting ActivatedRoute, you are configuring the component to use a service
    
    ngOnInit() {
      // get product if from current route
      // route parameters correspond to path variables you define in the route. To access the route parameters, use route.snapshot, which is ActivatedRouteSnapshot that contains information about active route at that particular moment. The URL that matches the route provides the productId. Angular uses the productId to display the details for each unique product.
      const routeParams = this.route.snapshot.paramMap;
      const productIdFromRoute = Number(routeParams.get('productId'));
      
      // find product coresponding with id provided in route
      this.product = products.find(product => product.id === productIdFromRoute);
    }
    
    // Define the addToCart() method, which adds the current product to the cart.
    //Takes the current product as an argument
    addToCart(product: Product) {
      //Uses the CartService addToCart() method to add the product to the cart
      this.cartService.addToCart(product);
      window.alert('Your product has been added to the cart!');
    }
  }
