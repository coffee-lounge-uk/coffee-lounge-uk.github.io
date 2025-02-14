import { MenuCategory } from "../enums/menu-category.enum";
import { MenuItem } from "../interfaces/menu-item.interface";

export const menuItems: MenuItem[] = [
	// Breakfast (all day)
	{
		Name: "Toast (Avocado + Egg)",
		Description: "Toasted Bread With Avocado And Egg, Served With A Drink Or Coffee.",
		Price: 3.00,
		Category: MenuCategory.BreakFast,
		IsSpecial: false
	},
	{
		Name: "Chicken Sandwich",
		Description: "Grilled Chicken Sandwich Served With A Drink Or Coffee.",
		Price: 3.00,
		Category: MenuCategory.BreakFast,
		IsSpecial: false
	},
	{
		Name: "Parata (Lamb + Dal)",
		Description: "Flaky Flatbread Stuffed With Spiced Lamb And Lentils.",
		Price: 5.00,
		Category: MenuCategory.BreakFast,
		IsSpecial: false
	},
	{
		Name: "Parata (Egg + Dal)",
		Description: "Flaky Flatbread Filled With Egg And Lentil Curry.",
		Price: 4.00,
		Category: MenuCategory.BreakFast,
		IsSpecial: false
	},
	{
		Name: "English Breakfast (Toast + Beans + Eggs + Sausage)",
		Description: "Classic Breakfast With Toast, Baked Beans, Eggs, And Sausage.",
		Price: 6.00,
		Category: MenuCategory.BreakFast,
		IsSpecial: false
	},

	// Lunch Special
	{
		Name: "Fried Rice With Grilled Chicken And Salad",
		Description: "Fried Rice With Grilled Chicken And Fresh Salad.",
		Price: 4.00,
		Category: MenuCategory.LunchSpecial,
		IsSpecial: false
	},
	{
		Name: "Noodles With Chicken",
		Description: "Stir-Fried Noodles With Chicken And Vegetables.",
		Price: 3.50,
		Category: MenuCategory.LunchSpecial,
		IsSpecial: false
	},

	// Salad
	{
		Name: "Chicken & Avocado Salad",
		Description: "Grilled Chicken And Avocado With Mixed Greens.",
		Price: 3.00,
		Category: MenuCategory.Salad,
		IsSpecial: false
	},
	{
		Name: "Cashewnut Salad",
		Description: "Mixed Greens With Cashews And A Tangy Dressing.",
		Price: 3.00,
		Category: MenuCategory.LunchSpecial,
		IsSpecial: false
	},
	{
		Name: "Protein Salad",
		Description: "Mixed Greens With Grilled Chicken And Chickpeas.",
		Price: 3.00,
		Category: MenuCategory.LunchSpecial,
		IsSpecial: false
	},

	// Snacks
	{
		Name: "Protein Salad",
		Description: "Mixed Greens With Grilled Chicken And Chickpeas.",
		Price: 3.00,
		Category: MenuCategory.LunchSpecial,
		IsSpecial: false
	},
	{
		Name: "Protein Salad",
		Description: "Mixed Greens With Grilled Chicken And Chickpeas.",
		Price: 3.00,
		Category: MenuCategory.LunchSpecial,
		IsSpecial: false
	},
	{
		Name: "Protein Salad",
		Description: "Mixed Greens With Grilled Chicken And Chickpeas.",
		Price: 3.00,
		Category: MenuCategory.LunchSpecial,
		IsSpecial: false
	},
	{
		Name: "Protein Salad",
		Description: "Mixed Greens With Grilled Chicken And Chickpeas.",
		Price: 3.00,
		Category: MenuCategory.LunchSpecial,
		IsSpecial: false
	},
	{
		Name: "Protein Salad",
		Description: "Mixed Greens With Grilled Chicken And Chickpeas.",
		Price: 3.00,
		Category: MenuCategory.LunchSpecial,
		IsSpecial: false
	},
	{
		Name: "Protein Salad",
		Description: "Mixed Greens With Grilled Chicken And Chickpeas.",
		Price: 3.00,
		Category: MenuCategory.LunchSpecial,
		IsSpecial: false
	},

	
	{
		Name: "Espresso",
		Description: "A Strong Shot Of Classic Espresso.",
		Price: 1.50,
		Category: MenuCategory.Coffe,
		IsSpecial: false
	},
	{
		Name: "Cappuccino",
		Description: "Creamy Coffee With Steamed Milk Foam.",
		Price: 2.50,
		Category: MenuCategory.Coffe,
		IsSpecial: false
	},
	{
		Name: "Latte",
		Description: "Coffee With Steamed Milk And Light Foam.",
		Price: 2.50,
		Category: MenuCategory.Coffe,
		IsSpecial: false
	},
	{
		Name: "Americano",
		Description: "Espresso Diluted With Hot Water.",
		Price: 2.00,
		Category: MenuCategory.Coffe,
		IsSpecial: false
	},
	{
		Name: "Mocha",
		Description: "Coffee With Chocolate And Steamed Milk.",
		Price: 3.00,
		Category: MenuCategory.Coffe,
		IsSpecial: false
	},
	{
		Name: "Hot Chocolate",
		Description: "Creamy Chocolate Drink.",
		Price: 3.00,
		Category: MenuCategory.Coffe,
		IsSpecial: false
	},
	{
		Name: "Karak Tea",
		Description: "Strong, Spiced Tea Brewed With Milk.",
		Price: 1.50,
		Category: MenuCategory.Tea,
		IsSpecial: false
	},
	{
		Name: "English Tea",
		Description: "Classic Black Tea.",
		Price: 1.50,
		Category: MenuCategory.Tea,
		IsSpecial: false
	},
	{
		Name: "Green Tea",
		Description: "Light And Refreshing Green Tea.",
		Price: 1.50,
		Category: MenuCategory.Tea,
		IsSpecial: false
	},
	{
		Name: "Herbal Tea",
		Description: "Tea With Mint, Lemon, Or Ginger.",
		Price: 1.50,
		Category: MenuCategory.Tea,
		IsSpecial: false
	},
	{
		Name: "Masala Tea",
		Description: "Spiced Indian Chai.",
		Price: 1.50,
		Category: MenuCategory.Tea,
		IsSpecial: false
	},
	{
		Name: "Chicken Shawarma",
		Description: "Marinated Chicken Wrapped In Flatbread With Vegetables.",
		Price: 4.00,
		Category: MenuCategory.Sandwiches,
		IsSpecial: false
	},
	{
		Name: "Chicken Wrap",
		Description: "Grilled Chicken Wrapped In A Soft Tortilla.",
		Price: 3.00,
		Category: MenuCategory.Sandwiches,
		IsSpecial: false
	},
	{
		Name: "Panini (Chicken, Salad)",
		Description: "Pressed Sandwich With Chicken And Fresh Salad.",
		Price: 3.00,
		Category: MenuCategory.Sandwiches,
		IsSpecial: false
	},
	{
		Name: "Cheesy Chicken Burger",
		Description: "Chicken Burger With Melted Cheese And Toppings.",
		Price: 2.50,
		Category: MenuCategory.Sandwiches,
		IsSpecial: false
	},
	{
		Name: "Chotpoti",
		Description: "Tangy Chickpea And Potato Street Snack.",
		Price: 5.00,
		Category: MenuCategory.BangladeshiStreetFood,
		IsSpecial: false
	},
	{
		Name: "Fuska",
		Description: "Crispy Puri Filled With Spicy Tamarind Water.",
		Price: 5.00,
		Category: MenuCategory.BangladeshiStreetFood,
		IsSpecial: false
	},
	{
		Name: "Plauj (3 Pc)",
		Description: "Traditional Bangladeshi Snack.",
		Price: 1.00,
		Category: MenuCategory.BangladeshiStreetFood,
		IsSpecial: false
	},
	{
		Name: "Pitha (Pc)",
		Description: "Traditional Rice Cake, Sweet Or Savory.",
		Price: 1.00,
		Category: MenuCategory.BangladeshiStreetFood,
		IsSpecial: false
	},
	{
		Name: "Soft Drinks Can (330ml)",
		Description: "Assorted Carbonated Beverages.",
		Price: 1.50,
		Category: MenuCategory.Drinks,
		IsSpecial: false
	},
	{
		Name: "Rubicon Can (330ml)",
		Description: "Mango Or Tropical Fruit Flavored Drink.",
		Price: 2.00,
		Category: MenuCategory.Drinks,
		IsSpecial: false
	},
	{
		Name: "Juice Bottle (500ml)",
		Description: "Bottled Fruit Juice.",
		Price: 2.00,
		Category: MenuCategory.Drinks,
		IsSpecial: false
	}
];