import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
	specialties = [
		{
			name: 'Specialty 1',
			description: 'This is a description of Specialty 1',
			image: 'specialty1.jpg'
		},
		{
			name: 'Specialty 2',
			description: 'This is a description of Specialty 2',
			image: 'specialty2.jpg'
		},
		{
			name: 'Specialty 3',
			description: 'This is a description of Specialty 3',
			image: 'specialty3.jpg'
		}
	];
  menuItems = [
		{
			name: 'Menu Item 1',
			description: 'This is a description of Menu Item 1',
			price: 10.99
		},
		{
			name: 'Menu Item 2',
			description: 'This is a description of Menu Item 2',
			price: 9.99
		},
		{
			name: 'Menu Item 3',
			description: 'This is a description of Menu Item 3',
			price: 8.99
		}
	];
}
