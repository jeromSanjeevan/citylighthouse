import { Component, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



interface ChurchEvent {
  title: string;
  date: string;
  description: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-home-lighthouse-church',
  standalone: false,
  templateUrl: './home-lighthouse-church.html',
  styleUrl: './home-lighthouse-church.css'
})
export class HomeLighthouseChurch {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

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
      url: 'https://www.youtube.com/watch?v=Xxfej2ullGA',
      thumbnail: 'https://img.youtube.com/vi/Xxfej2ullGA/hqdefault.jpg',
      title: 'Kiristhuvukkul Vazhum Enakku | Nam Yesu Nallavar '
    },
    {
      url: 'https://www.youtube.com/watch?v=FYaUSVXMyX4',
      thumbnail: 'https://img.youtube.com/vi/FYaUSVXMyX4/hqdefault.jpg',
      title: 'Alangaara Vaasalaalae | அலங்கார வாசலாலே'
    },
    {
      url: 'hhttps://www.youtube.com/watch?v=PPo1HxlMqIw',
      thumbnail: 'https://img.youtube.com/vi/PPo1HxlMqIw/hqdefault.jpg',
      title: 'Yesappa Unga Namathil | இயேசப்பா உங்க நாமத்தில் '
    }
  ];

  events: ChurchEvent[] = [
    {
    title: 'Sunday Service (Tamil)',
    date: 'August 10, 2025',
    description: 'Join us for an evening of worship and prayer led by our worship team.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0',
    link: '/events/worship-night'
  },
     {
    title: 'Sunday Service (Tamil)',
    date: 'August 17, 2025',
    description: 'Join us for an evening of worship and prayer led by our worship team.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0',
    link: '/events/worship-night'
  },
     {
    title: 'Sunday Service (Tamil)',
    date: 'August 24, 2025',
    description: 'Join us for an evening of worship and prayer led by our worship team.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0',
    link: '/events/worship-night'
  },
     {
    title: 'Sunday Service (Tamil)',
    date: 'August 31, 2025',
    description: 'Join us for an evening of worship and prayer led by our worship team.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0',
    link: '/events/worship-night'
  },
  ];
}
