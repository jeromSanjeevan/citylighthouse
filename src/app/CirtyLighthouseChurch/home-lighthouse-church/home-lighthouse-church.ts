import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home-lighthouse-church',
  standalone: false,
  templateUrl: './home-lighthouse-church.html',
  styleUrl: './home-lighthouse-church.css'
})
export class HomeLighthouseChurch {
isLoading = true;  // show spinner initially

  videoUrls: SafeResourceUrl[] = [];

  constructor(private sanitizer: DomSanitizer) {
    // Simulate data loading
    setTimeout(() => {
      const urls = [
        'https://www.youtube.com/embed/Sn9CSxQsyWI',
        'https://www.youtube.com/embed/PPo1HxlMqIw',
        'https://www.youtube.com/embed/Tmsx-Boa0jc',
        'https://www.youtube.com/embed/Xxfej2ullGA',
      ];

      this.videoUrls = urls.map(url =>
        this.sanitizer.bypassSecurityTrustResourceUrl(url)
      );

      this.isLoading = false;  // hide spinner after loading
    }, 900); // simulate 1.5 seconds loading delay
  }

}
