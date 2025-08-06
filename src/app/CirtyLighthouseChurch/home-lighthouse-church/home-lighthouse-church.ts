import { Component, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home-lighthouse-church',
  standalone: false,
  templateUrl: './home-lighthouse-church.html',
  styleUrl: './home-lighthouse-church.css'
})
export class HomeLighthouseChurch {

  constructor(private el: ElementRef, private renderer: Renderer2) {}
ngAfterViewInit() {
  const elementsToObserve = this.el.nativeElement.querySelectorAll('.text-content, .image-content, .fade-slide');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'visible');
        } else {
          this.renderer.removeClass(entry.target, 'visible');
        }
      });
    },
    { threshold: 0.2 }
  );

  elementsToObserve.forEach((el: Element) => observer.observe(el));
}


  onJoinUs() {
    window.location.href = '/join-us';
  }

  onWatchLive() {
    window.open('https://yourchurch.live/stream', '_blank');
  }

  // SECTION 6
   videos = [
    {
      url: 'https://www.youtube.com/watch?v=VIDEO_ID_1',
      thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_1/hqdefault.jpg',
      title: 'Sermon Title 1'
    },
    {
      url: 'https://www.youtube.com/watch?v=VIDEO_ID_2',
      thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_2/hqdefault.jpg',
      title: 'Sermon Title 2'
    },
    {
      url: 'https://www.youtube.com/watch?v=VIDEO_ID_3',
      thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_3/hqdefault.jpg',
      title: 'Sermon Title 3'
    },
    {
      url: 'https://www.youtube.com/watch?v=VIDEO_ID_4',
      thumbnail: 'https://img.youtube.com/vi/VIDEO_ID_4/hqdefault.jpg',
      title: 'Sermon Title 4'
    }
  ];

}
