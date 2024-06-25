import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class BlogContentComponent {}
