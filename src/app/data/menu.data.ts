import { MenuCategory } from "../enums/menu-category.enum";
import { MenuItem } from "../interfaces/menu-item.interface";

export const MenuItems: MenuItem[] = [
	// Breakfast (all day)
	{
		Name: "Toast (Avocado + Egg) with (Drink/Coffee)",
		Description: "Toasted Bread With Avocado And Egg, Served With A Drink Or Coffee.",
		Price: 3.00,
		Category: MenuCategory.BreakFast,
		IsSpecial: true,
		ImagePath: "assets/images/b1.jpeg",
		Id: 1
	},
	{
		Name: "Chicken Sandwich with (Drink/Coffee)",
		Description: "Grilled Chicken Sandwich Served With A Drink Or Coffee.",
		Price: 3.00,
		Category: MenuCategory.BreakFast,
		IsSpecial: false,
		ImagePath: "assets/images/b2.jpeg",
		Id: 2
	},
	{
		Name: "Parata (Lamb + Dal) with (Drink/Coffee/Tea)",
		Description: "Flaky Flatbread Stuffed With Spiced Lamb And Lentils With A Drink Or Coffee or Tea.",
		Price: 5.00,
		Category: MenuCategory.BreakFast,
		IsSpecial: false,
		ImagePath: "assets/images/b3.jpeg",
		Id: 3
	},
	{
		Name: "Parata (Egg + Dal) with (Drink/Coffee/Tea)",
		Description: "Flaky Flatbread Filled With Egg And Lentil Curry With A Drink Or Coffee or Tea.",
		Price: 4.00,
		Category: MenuCategory.BreakFast,
		IsSpecial: false,
		ImagePath: "assets/images/b4.jpeg",
		Id: 4
	},
	{
		Name: "English Breakfast (Toast + Beans + Eggs + Sausage)",
		Description: "Classic Breakfast With Toast, Baked Beans, Eggs, And Sausage.",
		Price: 6.00,
		Category: MenuCategory.BreakFast,
		IsSpecial: false,
		ImagePath: "assets/images/b5.jpeg",
		Id: 5
	},

	// Lunch Special
	{
		Name: "Fried Rice With Grilled Chicken And Salad",
		Description: "Fried Rice With Grilled Chicken And Fresh Salad.",
		Price: 5.00,
		Category: MenuCategory.LunchSpecial,
		IsSpecial: true,
		ImagePath: "assets/images/ls1.jpeg",
		Id: 6
	},
	{
		Name: "Noodles With Chicken",
		Description: "Stir-Fried Noodles With Chicken And Vegetables.",
		Price: 4.00,
		Category: MenuCategory.LunchSpecial,
		IsSpecial: false,
		ImagePath: "assets/images/ls2.jpeg",
		Id: 7
	},
	{
		Name: "Bhuna Khichuri",
		Description: "Aromatic Rice And Lentil Dish With Spices And Meat.",
		Price: 5.00,
		Category: MenuCategory.LunchSpecial,
		IsSpecial: false,
		ImagePath: "assets/images/ls3.jpeg",
		Id: 59
	},

	// Salad
	{
		Name: "Chicken & Avocado Salad",
		Description: "Grilled Chicken And Avocado With Mixed Greens.",
		Price: 3.00,
		Category: MenuCategory.Salad,
		IsSpecial: true,
		ImagePath: "assets/images/sal1.jpeg",
		Id: 8
	},
	{
		Name: "Cashewnut Salad",
		Description: "Mixed Greens With Cashews And A Tangy Dressing.",
		Price: 3.00,
		Category: MenuCategory.Salad,
		IsSpecial: false,
		ImagePath: "assets/images/sal2.jpeg",
		Id: 9
	},
	{
		Name: "Protein Salad",
		Description: "Mixed Greens With Grilled Chicken And Chickpeas.",
		Price: 3.00,
		Category: MenuCategory.Salad,
		IsSpecial: false,
		ImagePath: "assets/images/sal3.jpeg",
		Id: 10
	},

	// Snacks
	{
		Name: 'Croissant',
		Description: 'Freshly baked, flaky croissant.',
		Price: 1.30,
		IsSpecial: true,
		Category: MenuCategory.Snacks,
		ImagePath: "assets/images/sn1.jpeg",
		Id: 11
	},
	{
		Name: 'Pastry (Vegetable/Chicken/Cheese & Onion)',
		Description: 'Delicious pastry filled with Onino and mixed vegetables or chicken or cheese.',
		Price: 2.50,
		IsSpecial: false,
		Category: MenuCategory.Snacks,
		ImagePath: "assets/images/sn2.jpeg",
		Id: 12
	},
	{
		Name: 'Shingara (1pc)',
		Description: 'Crispy, triangular pastry filled with spiced potatoes and peas.',
		Price: 1.00,
		IsSpecial: false,
		Category: MenuCategory.Snacks,
		ImagePath: "assets/images/sn3.jpeg",
		Id: 13
	},
	{
		Name: 'Spring Roll (Vegetable each)',
		Description: 'Crispy spring roll filled with fresh vegetables.',
		Price: 1.00,
		IsSpecial: false,
		Category: MenuCategory.Snacks,
		ImagePath: "assets/images/sn4.jpeg",
		Id: 14
	},
	{
		Name: 'Cake (Slice)',
		Description: 'A slice of moist, freshly baked cake.',
		Price: 1.00,
		IsSpecial: false,
		Category: MenuCategory.Snacks,
		ImagePath: "assets/images/sn5.jpeg",
		Id: 15
	},
	{
		Name: 'Muffin',
		Description: 'Soft and fluffy muffin, perfect for a quick snack.',
		Price: 2.00,
		IsSpecial: false,
		Category: MenuCategory.Snacks,
		ImagePath: "assets/images/sn6.jpeg",
		Id: 16
	},
	{
		Name: 'Milk Cake (Slice)',
		Description: 'Rich and creamy milk cake slice.',
		Price: 2.00,
		IsSpecial: false,
		Category: MenuCategory.Snacks,
		ImagePath: "assets/images/sn7.jpeg",
		Id: 17
	},

	// Desserts
	{
		Name: 'Rice Pudding (পায়েস)',
		Description: 'Creamy rice pudding flavored with cardamom and garnished with nuts.',
		Price: 1.50,
		IsSpecial: true,
		Category: MenuCategory.Desserts,
		ImagePath: "assets/images/d1.jpeg",
		Id: 18
	},
	{
		Name: 'Sweet Yougurt',
		Description: 'Creamy yogurt sweetened with sugar and flavored with cardamom.',
		Price: 1.50,
		IsSpecial: false,
		Category: MenuCategory.Desserts,
		ImagePath: "assets/images/d2.jpeg",
		Id: 19
	},
	{
		Name: 'Milkcake',
		Description: 'Rich and creamy milk cake.',
		Price: 2.00,
		IsSpecial: true,
		Category: MenuCategory.Desserts,
		ImagePath: "assets/images/d3.jpeg",
		Id: 20
	},

	// Drinks
	{
		Name: 'Soft Drink Can(330ml)',
		Description: 'A refreshing soft drink in a convenient 330ml can.',
		Price: 1.00,
		IsSpecial: false,
		Category: MenuCategory.Drinks,
		ImagePath: 'assets/images/dr1.jpeg',
		Id: 21
	},
	{
		Name: 'Rubicon Can (330ml)',
		Description: 'A delicious Rubicon drink in a 330ml can, perfect for any time of the day.',
		Price: 1.00,
		IsSpecial: false,
		Category: MenuCategory.Drinks,
		ImagePath: 'assets/images/dr2.jpeg',
		Id: 22
	},
	{
		Name: '7UP Can',
		Description: 'A crisp and refreshing 7UP soft drink in a 330ml can.',
		Price: 1.00,
		IsSpecial: false,
		Category: MenuCategory.Drinks,
		ImagePath: 'assets/images/dr3.jpeg',
		Id: 23
	},
	{
		Name: 'Water (500ml)',
		Description: 'Pure and refreshing water in a 500ml bottle.',
		Price: 1.00,
		IsSpecial: false,
		Category: MenuCategory.Drinks,
		ImagePath: 'assets/images/dr4.jpeg',
		Id: 24
	},
	{
		Name: 'Red Bull (330ml)',
		Description: 'An energizing Red Bull drink in a 330ml can.',
		Price: 1.80,
		IsSpecial: false,
		Category: MenuCategory.Drinks,
		ImagePath: 'assets/images/dr5.jpeg',
		Id: 25
	},
	{
		Name: 'Tropical Juice Bottle',
		Description: 'Freshly made tropical juice bottle.',
		Price: 1.99,
		IsSpecial: false,
		Category: MenuCategory.Drinks,
		ImagePath: 'assets/images/dr6.jpeg',
		Id: 26
	},
	{
		Name: 'Tango Can',
		Description: 'A refreshing Tango can.',
		Price: 1.00,
		IsSpecial: false,
		Category: MenuCategory.Drinks,
		ImagePath: 'assets/images/dr7.jpeg',
		Id: 26
	},
	{
		Name: 'Fanta Can',
		Description: 'A refreshing Fanta can.',
		Price: 1.00,
		IsSpecial: false,
		Category: MenuCategory.Drinks,
		ImagePath: 'assets/images/dr8.jpeg',
		Id: 26
	},

	// Smoothie
	{
		Name: 'FRUITS AND YOGURT',
		Description: 'A delicious blend of fresh fruits and creamy yogurt.',
		Price: 3.00,
		IsSpecial: false,
		Category: MenuCategory.Smoothie,
		ImagePath: 'assets/images/sm1.jpeg',
		Id: 27
	},
	{
		Name: 'MILKSHAKE (Mango, Banana, Strawberry)',
		Description: 'A creamy milkshake made with your choice of Mango, Banana, or Strawberry.',
		Price: 3.00,
		IsSpecial: false,
		Category: MenuCategory.Smoothie,
		ImagePath: 'assets/images/sm2.jpeg',
		Id: 28
	},
	{
		Name: 'AVOCADO YOGURT',
		Description: 'A healthy and smooth blend of avocado and yogurt.',
		Price: 3.00,
		IsSpecial: false,
		Category: MenuCategory.Smoothie,
		ImagePath: 'assets/images/sm3.jpeg',
		Id: 29
	},

	// Juice
	{
		Name: 'FRESH ORANGE JUICE',
		Description: 'A refreshing and tangy freshly squeezed orange juice.',
		Price: 2.50,
		IsSpecial: false,
		Category: MenuCategory.Juice,
		ImagePath: 'assets/images/j1.jpeg',
		Id: 30
	},
	{
		Name: 'FRESH APPLE JUICE',
		Description: 'A crisp and naturally sweet fresh apple juice.',
		Price: 2.50,
		IsSpecial: false,
		Category: MenuCategory.Juice,
		ImagePath: 'assets/images/j2.jpeg',
		Id: 31
	},
	{
		Name: 'FRESH PAPAYA JUICE',
		Description: 'A smooth and tropical papaya juice made from fresh papayas.',
		Price: 3.00,
		IsSpecial: false,
		Category: MenuCategory.Juice,
		ImagePath: 'assets/images/j3.jpeg',
		Id: 32
	},
	{
		Name: 'CARROT JUICE',
		Description: 'A healthy and refreshing carrot juice with a natural sweetness.',
		Price: 2.50,
		IsSpecial: false,
		Category: MenuCategory.Juice,
		ImagePath: 'assets/images/j4.jpeg',
		Id: 33
	},
	{
		Name: 'MANGO JUICE',
		Description: 'A rich and creamy mango juice made from fresh mangoes.',
		Price: 3.00,
		IsSpecial: false,
		Category: MenuCategory.Juice,
		ImagePath: 'assets/images/j5.jpeg',
		Id: 34
	},
	{
		Name: 'MIX JUICE',
		Description: 'A delicious mix of various fresh fruits to make a refreshing juice.',
		Price: 3.00,
		IsSpecial: false,
		Category: MenuCategory.Juice,
		ImagePath: 'assets/images/j6.jpeg',
		Id: 35
	},

	// Coffe
	{
		Name: 'ESPRESSO',
		Description: 'A rich and intense shot of freshly brewed espresso.',
		Price: 1.50,
		IsSpecial: false,
		Category: MenuCategory.Coffe,
		ImagePath: 'assets/images/c1.jpeg',
		Id: 36
	},
	{
		Name: 'MACCHIATO',
		Description: 'A bold espresso topped with a touch of steamed milk.',
		Price: 1.50,
		IsSpecial: false,
		Category: MenuCategory.Coffe,
		ImagePath: 'assets/images/c2.jpeg',
		Id: 37
	},
	{
		Name: 'CAPPUCCINO',
		Description: 'A classic coffee made with espresso, steamed milk, and foam.',
		Price: 2.50,
		IsSpecial: false,
		Category: MenuCategory.Coffe,
		ImagePath: 'assets/images/c3.jpeg',
		Id: 38
	},
	{
		Name: 'LATTE',
		Description: 'A smooth and creamy coffee made with espresso and steamed milk.',
		Price: 2.50,
		IsSpecial: false,
		Category: MenuCategory.Coffe,
		ImagePath: 'assets/images/c4.jpeg',
		Id: 39
	},
	{
		Name: 'AMERICANO',
		Description: 'A simple yet satisfying espresso diluted with hot water.',
		Price: 2.00,
		IsSpecial: false,
		Category: MenuCategory.Coffe,
		ImagePath: 'assets/images/c5.jpeg',
		Id: 40
	},
	{
		Name: 'MOCHA',
		Description: 'A decadent blend of espresso, steamed milk, and chocolate.',
		Price: 3.00,
		IsSpecial: false,
		Category: MenuCategory.Coffe,
		ImagePath: 'assets/images/c6.jpeg',
		Id: 41
	},
	{
		Name: 'HOT CHOCOLATE',
		Description: 'A warm and comforting drink made with rich chocolate.',
		Price: 3.00,
		IsSpecial: false,
		Category: MenuCategory.Coffe,
		ImagePath: 'assets/images/c7.jpeg',
		Id: 42
	},

	// Tea
	{
		Name: 'KARAK TEA',
		Description: 'A spiced tea with a rich, bold flavor and a touch of sweetness.',
		Price: 1.50,
		IsSpecial: false,
		Category: MenuCategory.Tea,
		ImagePath: 'assets/images/t1.jpeg',
		Id: 43
	},
	{
		Name: 'ENGLISH TEA',
		Description: 'A classic, traditional tea with a strong and smooth flavor.',
		Price: 1.50,
		IsSpecial: false,
		Category: MenuCategory.Tea,
		ImagePath: 'assets/images/t2.jpeg',
		Id: 44
	},
	{
		Name: 'GREEN TEA',
		Description: 'A refreshing and healthy tea with a light, earthy flavor.',
		Price: 1.50,
		IsSpecial: false,
		Category: MenuCategory.Tea,
		ImagePath: 'assets/images/t3.jpeg',
		Id: 45
	},
	{
		Name: 'HERBAL TEA (Mint, Lemon, Ginger)',
		Description: 'A soothing herbal blend with your choice of Mint, Lemon, or Ginger.',
		Price: 1.50,
		IsSpecial: false,
		Category: MenuCategory.Tea,
		ImagePath: 'assets/images/t4.jpeg',
		Id: 46
	},
	{
		Name: 'MASALA TEA',
		Description: 'A fragrant and spiced tea with a rich blend of spices.',
		Price: 1.50,
		IsSpecial: false,
		Category: MenuCategory.Tea,
		ImagePath: 'assets/images/t5.jpeg',
		Id: 47
	},

	// Sandwiches
	{
		Name: 'TOAST (Avocado, Egg)',
		Description: 'A toasted sandwich with creamy avocado and a perfectly cooked egg.',
		Price: 2.00,
		IsSpecial: false,
		Category: MenuCategory.Sandwiches,
		ImagePath: 'assets/images/sa1.jpeg',
		Id: 48
	},
	{
		Name: 'CHICKEN SANDWICH',
		Description: 'A delicious chicken sandwich with fresh ingredients and a savory filling.',
		Price: 2.00,
		IsSpecial: false,
		Category: MenuCategory.Sandwiches,
		ImagePath: 'assets/images/sa2.jpeg',
		Id: 49
	},
	{
		Name: 'CHICKEN SHAWARMA',
		Description: 'A flavorful chicken shawarma wrapped with spices and fresh veggies.',
		Price: 4.00,
		IsSpecial: true,
		Category: MenuCategory.Sandwiches,
		ImagePath: 'assets/images/sa3.jpeg',
		Id: 50
	},
	{
		Name: 'CHICKEN WRAP',
		Description: 'A tasty chicken wrap with crispy chicken and fresh salad.',
		Price: 3.00,
		IsSpecial: false,
		Category: MenuCategory.Sandwiches,
		ImagePath: 'assets/images/sa4.jpeg',
		Id: 51
	},
	{
		Name: 'PANINI (Chicken, Salad)',
		Description: 'A warm and toasted panini filled with chicken and crisp salad.',
		Price: 3.00,
		IsSpecial: false,
		Category: MenuCategory.Sandwiches,
		ImagePath: 'assets/images/sa5.jpeg',
		Id: 52
	},
	{
		Name: 'CHEESY CHICKEN BURGER',
		Description: 'A juicy chicken burger with melted cheese and fresh toppings.',
		Price: 2.50,
		IsSpecial: false,
		Category: MenuCategory.Sandwiches,
		ImagePath: 'assets/images/sa6.jpeg',
		Id: 53
	},

	// Bangladeshi Street Food
	{
		Name: 'CHOTPOTI (small)',
		Description: 'A small serving of spicy, tangy, and flavorful Chotpoti.',
		Price: 3.00,
		IsSpecial: true,
		Category: MenuCategory.BangladeshiStreetFood,
		ImagePath: 'assets/images/bsf1.jpeg',
		Id: 54
	},
  {
		Name: 'CHOTPOTI (large)',
		Description: 'A large serving of spicy, tangy, and flavorful Chotpoti.',
		Price: 5.00,
		IsSpecial: false,
		Category: MenuCategory.BangladeshiStreetFood,
		ImagePath: 'assets/images/bsf1.jpeg',
		Id: 55
	},
  {
		Name: 'FUSKA (6 piece)',
		Description: 'A delightful dish of 6 pieces of crispy, stuffed Fuska.',
		Price: 3.00,
		IsSpecial: true,
		Category: MenuCategory.BangladeshiStreetFood,
		ImagePath: 'assets/images/bsf2.jpeg',
		Id: 56
	},
  {
		Name: 'FUSKA (10 piece)',
		Description: 'A large serving of 10 pieces of crispy, stuffed Fuska.',
		Price: 5.00,
		IsSpecial: false,
		Category: MenuCategory.BangladeshiStreetFood,
		ImagePath: 'assets/images/bsf2.jpeg',
		Id: 57
	},
  {
		Name: 'PIAJU (3 PC)',
		Description: '3 pieces of crispy, savory Piajus, perfect for a quick snack.',
		Price: 1.00,
		IsSpecial: false,
		Category: MenuCategory.BangladeshiStreetFood,
		ImagePath: 'assets/images/bsf3.jpeg',
		Id: 58
	},
  {
		Name: 'PITHA (1 PC)',
		Description: 'A single piece of traditional Pitha, a sweet Bengali snack.',
		Price: 1.00,
		IsSpecial: false,
		Category: MenuCategory.BangladeshiStreetFood,
		ImagePath: 'assets/images/bsf4.jpeg',
		Id: 59
	},
];