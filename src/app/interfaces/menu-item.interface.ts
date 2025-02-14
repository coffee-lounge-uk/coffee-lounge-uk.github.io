import { MenuCategory } from "../enums/menu-category.enum";

export class MenuItem {
	Name!: string;
	Description!: string;
	Price!: number;
	IsSpecial: boolean = false;
	Category!: MenuCategory;
}