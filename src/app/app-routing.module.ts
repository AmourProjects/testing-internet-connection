import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternetConnectionPreloadingStrategy } from './services/internet-connection-preloading-strategy.service';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }, 
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: InternetConnectionPreloadingStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
