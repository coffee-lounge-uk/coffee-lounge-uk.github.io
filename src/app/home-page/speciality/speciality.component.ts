import { Component } from '@angular/core';

@Component({
  selector: 'app-speciality',
  standalone: true,
  imports: [],
  templateUrl: './speciality.component.html',
  styleUrl: './speciality.component.scss'
})
export class SpecialityComponent {
	specialties = [
    { name: 'Espresso', description: 'Strong and rich coffee.', price: 2.5, image: 'path_to_image' },
    { name: 'Cappuccino', description: 'Coffee with steamed milk.', price: 3.0, image: 'path_to_image' },
    // Add more items here
  ];

  slideConfig = { slidesToShow: 1, slidesToScroll: 1, autoplay: true };
}
