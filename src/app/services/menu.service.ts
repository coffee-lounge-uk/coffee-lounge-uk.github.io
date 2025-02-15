import { Injectable } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item.interface';
import { MenuCategory } from '../enums/menu-category.enum';
import { MenuItems } from '../data/menu.data';
import { MenuCategoryItems } from '../data/menu-categories.data';
import { MenuCategoryItem } from '../interfaces/menu-category-item.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
	private specialMenuItems: MenuItem[] = [];

	constructor() {
		this.specialMenuItems = MenuItems.filter(i => i.IsSpecial);
	}

  getMenu(): MenuItem[] { 
		return MenuItems; 
	}

  getSpecialItems(): MenuItem[] { 
		return this.specialMenuItems; 
	}

  getCategories(): MenuCategoryItem[] { 
		return MenuCategoryItems;
	}

  getItemById(id: string): MenuItem | undefined { 
		return MenuItems.find(item => item.Id.toString() === id); 
	}

	GetItemsByCategory(category: MenuCategory): MenuItem[] {
		return MenuItems.filter(item => item.Category === category);
	}
}
