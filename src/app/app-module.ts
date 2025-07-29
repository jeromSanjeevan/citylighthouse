import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LandingPage } from './Home/landing-page/landing-page';
import { Footer } from './Footer/footer/footer';
import { HomeLighthouseChurch } from './CirtyLighthouseChurch/home-lighthouse-church/home-lighthouse-church';
import { NavbarLighthouseChurch } from './Navbar/navbar-lighthouse-church/navbar-lighthouse-church';

@NgModule({
  declarations: [
    App,
    LandingPage,
    Footer,
    HomeLighthouseChurch,
    NavbarLighthouseChurch
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
