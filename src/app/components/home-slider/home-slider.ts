import { Component } from '@angular/core';


interface Slide {
  image: string;
  tag: string;
  heading: string;
  italicWord: string;
  subtext: string;
}

@Component({
  selector: 'app-home-slider',
  standalone: false,
  templateUrl: './home-slider.html',
  styleUrl: './home-slider.css',
})
export class HomeSlider {
  slides: Slide[] = [
    {
      image: 'images/hero/lighthouse2.png',
      tag: 'Coventry Independent Pentecostal Ministry',
      heading: 'One Church. Two Spiritual',
      italicWord: 'Environments.',
      subtext: 'A community balancing deliberate biblical corporate spaces with rich, organic neighborhood accountability cells.'
    },
    {
      image: 'images/hero/lighthouse1.jpg',
      tag: 'Apostolic Foundations & Sincere Worship',
      heading: 'Uncompromising Truth. Prophetic',
      italicWord: 'Atmosphere.',
      subtext: 'Join us every Sunday at 3:00 PM to experience transformational scriptural alignment and real relational warmth.'
    }
  ];
}
