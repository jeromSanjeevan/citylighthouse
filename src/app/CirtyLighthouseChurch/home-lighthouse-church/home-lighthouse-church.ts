import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home-lighthouse-church',
  standalone: false,
  templateUrl: './home-lighthouse-church.html',
  styleUrl: './home-lighthouse-church.css'
})
export class HomeLighthouseChurch {
 videoUrls: SafeResourceUrl[] = [];
  selectedVideoUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {
    const urls = [
      'https://www.youtube.com/embed/Sn9CSxQsyWI',
      'https://www.youtube.com/embed/PPo1HxlMqIw',
      'https://www.youtube.com/embed/Tmsx-Boa0jc',
      'https://www.youtube.com/embed/Xxfej2ullGA',
    ];

    this.videoUrls = urls.map((url) =>
      this.sanitizer.bypassSecurityTrustResourceUrl(url)
    );
  }


}
