// set up ProductAlertsComponent to receive product data, import Input from @angular/core
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';




//  @Component() decorator indicates that the following class is a component. @Component() also provides metadata about the component, including its selector, templates, and styles 
@Component({

  //identifies the component: Angular component selectors begin with app-, followed by the component name.
  selector: 'app-product-alerts',
  //template and style filenames reference the component's HTML and CSS
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

//exports the class, ProductAlertsComponent, which handles functionality for the component
export class ProductAlertsComponent {

//In the ProductAlertsComponent class definition, define a property named product with an @Input() decorator. The @Input() decorator indicates that the property value passes in from the component's parent, ProductListComponent.
@Input() product: Product | undefined;

// define property notify with an @Output() decorator and instance of EventEmitter()
@Output() notify = new EventEmitter();
}