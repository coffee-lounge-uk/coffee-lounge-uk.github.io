import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '**', redirectTo: '' },
  { path: '', component: HomeComponent },
	{
    path: 'item/:name',
    loadComponent: () => import('./components/item-detail/item-detail.component').then(m => m.ItemDetailComponent)
  },
];

@NgModule({
	imports: [
		BrowserModule,
		CommonModule,
		RouterModule.forRoot(routes)
	],
	providers: [],
})
export class AppModule { }
