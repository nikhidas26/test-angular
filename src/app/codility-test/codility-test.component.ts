import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-codility-test',
  template: `<div class='card'>
  <div class='card-header'>
    Insert Page Title from Component here
  </div>
  <div class='card-body'>
    
    <div class='table-responsive'>
      <table class='table'>
        <thead>
          <tr>
            <th>Product</th>
            <th>Code</th>
            <th>Description</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
        
         
        
        </tbody>
      </table>
    </div>
  </div>
</div>`,
  styles: [`.table tr.active td {
    background-color:#123456 !important;
    color: white;
  }

  `]
})
export class CodilityTestComponent {

  pageTitle: string = "Product List";
  selectedRow : Number;

  products: IProduct[] = [
    {
        "productId": 1,
        "productName": "Commercial Generator",
        "productCode": "Gen007",
        "description": "Generator for commercial purposes",
        "price": 100,
    },
    {
        "productId": 2,
        "productName": "Residential Generators",
        "productCode": "RES008",
        "description": "Generators for your home",
        "price": 8.9,
    }
];

  onRowClick(index): void {
    
  }

}
