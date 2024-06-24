import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class BottomBarComponent {
  showMobileBar = true;
  private scrollTimeout: any;

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
