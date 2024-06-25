import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class ProductComponent implements AfterViewInit {
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
    {
      productName: 'The uncahined - Part IV',
      produtPrice: 500,
      percentageDiscount: 15,
    },
    {
      productName: 'The uncahined - Part IV',
      produtPrice: 500,
      percentageDiscount: 15,
    },
    {
      productName: 'The uncahined - Part IV',
      produtPrice: 500,
      percentageDiscount: 15,
    },
    {
      productName: 'The uncahined - Part IV',
      produtPrice: 500,
      percentageDiscount: 15,
    },
  ];

  ngAfterViewInit(): void {
    const videos = document.querySelectorAll(
      '.background-video'
    ) as NodeListOf<HTMLVideoElement>;
    videos.forEach((video) => {
      video.addEventListener('contextmenu', (event: MouseEvent) => {
        event.preventDefault();
      });

      video.play().catch((error) => {
        video.muted = true;
        video.play();
      });
    });
  }
}
