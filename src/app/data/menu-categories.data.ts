import { MenuCategory } from '../enums/menu-category.enum';
import { MenuCategoryItem } from './../interfaces/menu-category-item.interface';

export const MenuCategoryItems: MenuCategoryItem[] = [
	{
		Name: MenuCategory.BreakFast,
		IconPath: "assets/icons/breakfast.svg"
	},
	{
		Name: MenuCategory.LunchSpecial,
		IconPath: "assets/icons/lunch.svg"
	},
	{
		Name: MenuCategory.Drinks,
		IconPath: "assets/icons/drink.svg"
	},
	{
		Name: MenuCategory.Desserts,
		IconPath: "assets/icons/dessert.svg"
	}
];