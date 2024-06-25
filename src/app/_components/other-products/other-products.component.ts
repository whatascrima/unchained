import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-other-products',
  templateUrl: './other-products.component.html',
  styleUrls: ['./other-products.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class OtherProductsComponent {}
