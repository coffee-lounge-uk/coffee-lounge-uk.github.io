import { Component, OnInit, signal } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item.interface';
import { MenuService } from '../../services/menu.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuCategoryItem } from '../../interfaces/menu-category-item.interface';
import { MenuCategory } from '../../enums/menu-category.enum';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
	specials: MenuItem[] = [];
  menuCategories: MenuCategoryItem[] = [];
  currentSpecialIndex = signal(0);
  private intervalId: any;

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.specials = this.menuService.getSpecialItems();
    this.menuCategories = this.menuService.getCategories();
    
    this.startSlideshow();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startSlideshow() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  prevSlide() {
    this.currentSpecialIndex.update(value => 
      value === 0 ? this.specials.length - 1 : value - 1
    );
  }

  nextSlide() {
    this.currentSpecialIndex.update(value => 
      (value + 1) % this.specials.length
    );
  }

	getCategoryItems(category: MenuCategory): MenuItem[] {
		return this.menuService.GetItemsByCategory(category);
	}
}
