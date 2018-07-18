import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-codility-test',
  template: `<div class='card'>
  <div class='card-header'>
    {{pageTitle}}
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
          <tr *ngFor = 'let product of products; let i = index' (click) = 'onRowClick(i)' [class.active]='i == selectedRow'>
           
            <td>{{product.productName}}</td>
            <td>{{product.productCode | lowercase }}</td>
            <td>{{product.description}}</td>
            <td>{{product.price | currency: 'USD' : 'symbol':'1.2-2'}}</td>
            <td><i class="fa fa-heart"></i><span>{{count}}</span></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>`,
  styles: [`.table tr.active td {
    background-color:#123456 !important;
    color: white;
  }

  .table tr.active i {
    color: deeppink;
  }`]
})
export class CodilityTestComponent {

  pageTitle: string = "Product List";
  isActive: boolean = false;
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
    this.selectedRow = index;
  }

}
