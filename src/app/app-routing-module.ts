import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPage } from './Home/landing-page/landing-page';
import { HomeLighthouseChurch } from './CirtyLighthouseChurch/home-lighthouse-church/home-lighthouse-church';
import { AboutUs } from './CirtyLighthouseChurch/AboutUs/about-us/about-us';

const routes: Routes = [
  { path: '', component: LandingPage }, // Load on root path
  { path: 'citylighthouse-home', component: HomeLighthouseChurch },
    { path: 'about-us', component: AboutUs },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
