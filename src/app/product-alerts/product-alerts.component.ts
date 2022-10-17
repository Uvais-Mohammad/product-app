import { Component,Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {

@Input() product!:Product;

 clicked(){
  window.alert("You will be notified")
 }

}
