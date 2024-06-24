import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
})
export class MarketplaceComponent implements OnInit {
  backgrounds: string[] = [
    'url("/assets/bcyTJ2Z5SEdzqZMXKXty2sGes.avif")',
    'url("/assets/destiny-2-the-final-3840x2160-16959.jpg")',
    'url("/assets/diablo-4-season-4-3840x2160-16754.jpeg")',
    'url("/assets/rise-of-the-ronin-3840x2160-15570.jpg")',
    'url("/assets/final-fantasy-vii-3840x2160-16078.jpg")',
  ];
  currentBackgroundIndex: number = 0;
  currentBackground: string = this.backgrounds[this.currentBackgroundIndex];
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentBackgroundIndex =
        (this.currentBackgroundIndex + 1) % this.backgrounds.length;
      this.currentBackground = this.backgrounds[this.currentBackgroundIndex];
    }, 3000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
