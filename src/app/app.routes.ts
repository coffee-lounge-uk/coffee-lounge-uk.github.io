import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{
		path: 'item/:id',
    loadComponent: () => import('./components/item-detail/item-detail.component').then(m => m.ItemDetailComponent)
  },
	{ path: '**', redirectTo: '' },
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
