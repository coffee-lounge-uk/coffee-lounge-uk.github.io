import { MenuCategory } from "../enums/menu-category.enum";

export class MenuItem {
	id!: number;
	Name!: string;
	Description!: string;
	Price!: number;
	IsSpecial: boolean = false;
	Category!: MenuCategory;
	ImagePath!: string;
}