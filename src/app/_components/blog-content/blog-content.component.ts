import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class BlogContentComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const videos = document.querySelectorAll(
      '.background-video'
    ) as NodeListOf<HTMLVideoElement>;
    videos.forEach((video) => {
      video.addEventListener('contextmenu', (event: MouseEvent) => {
        event.preventDefault();
      });

      video.play().catch((error) => {
        // If autoplay fails, try to play the video again with muted attribute.
        video.muted = true;
        video.play();
      });
    });
  }
}
