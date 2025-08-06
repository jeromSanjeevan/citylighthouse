import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: false,
  templateUrl: './about-us.html',
  styleUrl: './about-us.css'
})
export class AboutUs {
  sections = [
    {
      title: 'Our Mission',
      snippet: 'We believe in a purposeful and Spirit-led journey of faith.',
      link: '/about/mission',
      icon: 'fa-cross',
      colorClass: 'bg-mission'
    },
    {
      title: 'Who We Are',
      snippet: 'We are a multi-generational church welcoming everyone.',
      link: '/about/who-we-are',
      icon: 'fa-users',
      colorClass: 'bg-who'
    },
    {
      title: 'What We Value',
      snippet: 'Faith, fellowship, and service are at the core of our community.',
      link: '/about/values',
      icon: 'fa-hand-holding-heart',
      colorClass: 'bg-values'
    },
    {
      title: 'Faith Statement',
      snippet: 'Explore our core beliefs rooted in Scripture and Spirit.',
      link: '/faith-statment',
      icon: 'fa-book-bible',
      colorClass: 'bg-faith'
    }
  ];

}
