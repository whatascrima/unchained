import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ContentComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function () {
      const video = document.querySelector(
        '.background-video'
      ) as HTMLVideoElement | null;
      if (video) {
        video.addEventListener('contextmenu', function (event: MouseEvent) {
          event.preventDefault();
        });

        video.play().catch((error) => {
          // If autoplay fails, try to play the video again with muted attribute.
          video.muted = true;
          video.play();
        });
      }
    });
  }
}
