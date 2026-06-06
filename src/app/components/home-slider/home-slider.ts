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
      tag: 'The Community you need',
      heading: 'Coventry Tamil ',
      italicWord: 'Church.',
      subtext: 'A community balancing deliberate biblical corporate spaces with rich, organic neighborhood accountability cells.'
    },
    {
      image: 'images/hero/lighthouse1.jpg',
      tag: 'The Community you need',
      heading: 'Coventry Tamil ',
      italicWord: 'Church.',
      subtext: 'A community balancing deliberate biblical corporate spaces with rich, organic neighborhood accountability cells.'
    }
  ];
}
