import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ProductComponent {
  constructor() {}

  products = [
    {
      productName: 'The uncahined - Part I',
      produtPrice: 200,
      percentageDiscount: 20,
    },
    {
      productName: 'The uncahined - Part II',
      produtPrice: 300,
      percentageDiscount: 10,
    },
    {
      productName: 'The uncahined - Part III',
      produtPrice: 400,
      percentageDiscount: 5,
    },
    {
      productName: 'The uncahined - Part IV',
      produtPrice: 500,
      percentageDiscount: 15,
    },
  ];
}
