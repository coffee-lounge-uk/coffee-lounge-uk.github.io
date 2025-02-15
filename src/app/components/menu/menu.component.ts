import { Component, OnInit } from '@angular/core';
import { MenuCategory } from '../../enums/menu-category.enum';
import { MenuCategoryItem } from '../../interfaces/menu-category-item.interface';
import { MenuItem } from '../../interfaces/menu-item.interface';
import { MenuService } from '../../services/menu.service';
import { Router, RouterModule } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, CurrencyPipe],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
	items: MenuItem[] = [];
	menuCategories: MenuCategoryItem[] = [];
	selectedCategory: MenuCategoryItem | null = null;

	constructor(private router: Router, private menuService: MenuService) {}

	ngOnInit() {
		this.items = this.menuService.getMenu();
		this.menuCategories = this.menuService.getCategories();
	}

	get CurrentMenuCategories(): MenuCategoryItem[] {
		return this.selectedCategory ? [this.selectedCategory] : this.menuCategories;
	}

	toggleCategory(category: MenuCategoryItem): void {
		this.selectedCategory = this.selectedCategory?.Name === category.Name ? null : category;
	}

	getCategoryItems(category: MenuCategory): MenuItem[] {
		return this.items.filter(item => item.Category === category);
	}

	goToItem(id: number) {
		console.log("going to item", id);
		this.router.navigate([`/item/${id}`]);
	}
}
