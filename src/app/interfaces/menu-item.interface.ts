import { MenuCategory } from "../enums/menu-category.enum";

export class MenuItem {
	Id!: number;
	Name!: string;
	Description!: string;
	Price!: number;
	IsSpecial: boolean = false;
	Category!: MenuCategory;
	ImagePath!: string;
}