import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class MessageComponent {
  showMobileBar = true;
  private scrollTimeout: any;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }

    // Hide the mobile bar while scrolling
    this.showMobileBar = false;

    // Show the mobile bar after 200ms of no scrolling
    this.scrollTimeout = setTimeout(() => {
      this.showMobileBar = true;
    }, 200);
  }
}
