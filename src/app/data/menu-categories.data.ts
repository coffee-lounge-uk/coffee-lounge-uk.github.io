import { MenuCategory } from '../enums/menu-category.enum';
import { MenuCategoryItem } from './../interfaces/menu-category-item.interface';

export const MenuCategoryItems: MenuCategoryItem[] = [
  { Name: MenuCategory.BreakFast, IconPath: 'assets/icons/breakfast-icon.svg' },
  { Name: MenuCategory.LunchSpecial, IconPath: 'assets/icons/lunch-special-icon.svg' },
  { Name: MenuCategory.Salad, IconPath: 'assets/icons/salad-icon.svg' },
  { Name: MenuCategory.Snacks, IconPath: 'assets/icons/snacks-icon.svg' },
  { Name: MenuCategory.Desserts, IconPath: 'assets/icons/desserts-icon.svg' },
  { Name: MenuCategory.Drinks, IconPath: 'assets/icons/drinks-icon.svg' },
  { Name: MenuCategory.Smoothie, IconPath: 'assets/icons/smoothie-icon.svg' },
  { Name: MenuCategory.Juice, IconPath: 'assets/icons/juice-icon.svg' },
  { Name: MenuCategory.Coffe, IconPath: 'assets/icons/coffee-icon.svg' },
  { Name: MenuCategory.Tea, IconPath: 'assets/icons/tea-icon.svg' },
  { Name: MenuCategory.Sandwiches, IconPath: 'assets/icons/sandwiches-icon.svg' },
  { Name: MenuCategory.BangladeshiStreetFood, IconPath: 'assets/icons/bangladeshi-street-food-icon.svg' }
];