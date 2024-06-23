import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  ngOnInit(): void {
    this.bannerScroll();
  }
  bannerScroll() {
    window.addEventListener('scroll', () => {
      let scrollPosition = window.scrollY;
      let maxScroll = window.innerHeight;
      let zoomFactor = 1 + Math.min(scrollPosition / maxScroll, 1);

      const banner = document.querySelector('.banner') as HTMLElement;

      if (scrollPosition <= maxScroll) {
        banner.style.transform = `scale(${zoomFactor})`;
        banner.style.opacity = `${1 - scrollPosition / maxScroll}`;
      } else {
        banner.style.transform = 'scale(2)';
        banner.style.opacity = '0';
      }
    });
  }
}
