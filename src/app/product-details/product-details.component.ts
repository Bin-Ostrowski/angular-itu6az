import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//import products array
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  //define product property
  product: Product | undefined;

  // Inject ActivatedRoute into the constructor() by adding private route: ActivatedRoute as an argument 
  constructor(private route: ActivatedRoute) {}
  //ActivatedRoute is specific to each component that the Angular Router loads. ActivatedRoute contains information about the route and the route's parameters.By injecting ActivatedRoute, you are configuring the component to use a service

  ngOnInit() {
    // get product if from current route
    // route parameters correspond to path variables you define in the route. To access the route parameters, use route.snapshot, which is ActivatedRouteSnapshot that contains information about active route at that particular moment. The URL that matches the route provides the productId. Angular uses the productId to display the details for each unique product.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // find product coresponding with id provided in route
    this.product = products.find(product => product.id === productIdFromRoute);
  }

}
