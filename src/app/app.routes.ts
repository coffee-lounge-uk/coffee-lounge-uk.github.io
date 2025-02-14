import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './home-page/menu/menu.component';
import { SpecialityComponent } from './home-page/speciality/speciality.component';
import { ContactComponent } from './home-page/contact/contact.component';

export const routes: Routes = [
	{
		path: '',
		component: HomePageComponent,
		children: [
			{ path: 'home', component: HomePageComponent },
			{ path: 'specialities', component: HomePageComponent },
			{ path: 'menu', component: HomePageComponent },
			{ path: 'contact', component: HomePageComponent }
		]
	}
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
