import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CommunityChurch } from './pages/community-church/community-church';
import { CommunityEmbrace } from './pages/community-embrace/community-embrace';
import { Contact } from './pages/contact/contact';
import { Leadership } from './pages/leadership/leadership';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'community-church', component: CommunityChurch },
  { path: 'community-embrace', component: CommunityEmbrace },
  { path: 'our-Leadership', component: Leadership },
  { path: 'contact', component: Contact },
  // Safety net: redirects any unknown paths back to the home landing page
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      useHash: true // 👈 This completely fixes the GitHub Pages direct link/refresh 404 error!
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }