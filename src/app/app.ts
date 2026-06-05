import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.css']
})
export class App {
  title = 'citylighthouse';
  hasAcceptedCookies: boolean = false;

  ngOnInit() {
    // 1. Check if the user has already accepted the banner settings previously
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'granted') {
      this.hasAcceptedCookies = true;
    }
  }

  acceptCookies() {
    // 2. Write the preference key variables straight to local storage arrays
    localStorage.setItem('cookieConsent', 'granted');
    this.hasAcceptedCookies = true;
  }
}
