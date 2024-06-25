import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-details-component',
  templateUrl: './product-details-component.component.html',
  styleUrls: ['./product-details-component.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class ProductDetailsComponentComponent implements AfterViewInit {
  selectedImage: string =
    'https://framerusercontent.com/assets/3YoDkbBexhhqPYuS3hf9rjm8r4.mp4';
  images = [
    {
      src: 'https://framerusercontent.com/assets/5mVRsGgGvLcbO9e65aSw7jN6RcY.mp4',
    },
    {
      src: 'https://framerusercontent.com/assets/Eeop5e6aBOQ5zOwzAp9XIKc6RU.mp4',
    },
    {
      src: 'https://framerusercontent.com/assets/3YoDkbBexhhqPYuS3hf9rjm8r4.mp4',
    },
  ];

  selectImage(image: string): void {
    this.selectedImage = image;
  }

  stars = new Array(5);

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
