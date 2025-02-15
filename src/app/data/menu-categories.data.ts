import { MenuCategory } from '../enums/menu-category.enum';
import { MenuCategoryItem } from './../interfaces/menu-category-item.interface';

export const MenuCategoryItems: MenuCategoryItem[] = [
  { Name: MenuCategory.BreakFast, IconPath: 'assets/svg/breakfast.svg' },
  { Name: MenuCategory.LunchSpecial, IconPath: 'assets/svg/lunch.svg' },
  { Name: MenuCategory.Salad, IconPath: 'assets/svg/salad.svg' },
  { Name: MenuCategory.Snacks, IconPath: 'assets/svg/snacks.svg' },
  { Name: MenuCategory.Desserts, IconPath: 'assets/svg/dessert.svg' },
  { Name: MenuCategory.Drinks, IconPath: 'assets/svg/drink.svg' },
  { Name: MenuCategory.Smoothie, IconPath: 'assets/svg/smoothie.svg' },
  { Name: MenuCategory.Juice, IconPath: 'assets/svg/juice.svg' },
  { Name: MenuCategory.Coffe, IconPath: 'assets/svg/coffee.svg' },
  { Name: MenuCategory.Tea, IconPath: 'assets/svg/tea.svg' },
  { Name: MenuCategory.Sandwiches, IconPath: 'assets/svg/sandwich.svg' },
  { Name: MenuCategory.BangladeshiStreetFood, IconPath: 'assets/svg/street-food.svg' },
];