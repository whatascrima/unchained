import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'unchained';
  showPreloader = true;

  ngOnInit(): void {
    initFlowbite();

    setTimeout(() => {
      this.showPreloader = false;
    }, 3000); // Show preloader for 3 seconds
  }
}
