import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Home } from './pages/home/home';
import { CommunityChurch } from './pages/community-church/community-church';
import { CommunityEmbrace } from './pages/community-embrace/community-embrace';
import { Contact } from './pages/contact/contact';
import { HomeSlider } from './components/home-slider/home-slider';
import { Leadership } from './pages/leadership/leadership';

@NgModule({
  declarations: [
    App,
    Navbar,
    Footer,
    Home,
    CommunityChurch,
    CommunityEmbrace,
    Contact,
    HomeSlider,
    Leadership,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
