import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { environment } from '../environments/environment';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{
		path: 'item/:id',
    loadComponent: () => import('./components/item-detail/item-detail.component').then(m => m.ItemDetailComponent)
  },
	{
		path: 'order',
    loadComponent: () => import('./components/order/order.component').then(m => m.OrderComponent)
  },
	{ path: '**', redirectTo: '' },
];
