import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
	menuItems = [
    { name: 'Latte', description: 'Coffee with steamed milk.', price: 3.5 },
    { name: 'Mocha', description: 'Coffee with chocolate.', price: 4.0 },
    // Add more menu items here
  ];
}
