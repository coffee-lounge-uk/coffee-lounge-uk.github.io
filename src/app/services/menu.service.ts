import { Injectable } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item.interface';
import { MenuCategory } from '../enums/menu-category.enum';
import { menuItems } from '../data/menu.data';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
	private menuItems: MenuItem[] = [];

	constructor() {
		this.menuItems = menuItems;
	}

  getMenu(): MenuItem[] { 
		return this.menuItems; 
	}

  getSpecialItems(): MenuItem[] { 
		return this.menuItems.filter(i => i.IsSpecial); 
	}

  getCategories(): MenuCategory[] { 
		return Object.values(MenuCategory);
	}

  getItemByName(name: string) { 
		return this.menuItems.find(item => item.Name === name); 
	}
}
