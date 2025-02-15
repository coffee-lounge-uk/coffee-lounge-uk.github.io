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
		id: 0
	},
	{
		Name: "Chicken Sandwich with (Drink/Coffee)",
		Description: "Grilled Chicken Sandwich Served With A Drink Or Coffee.",
		Price: 3.00,
		Category: MenuCategory.BreakFast,
		IsSpecial: false,
		ImagePath: "assets/images/b1.jpeg",
		id: 0
	},
	{
		Name: "Parata (Lamb + Dal) with (Drink/Coffee/Tea)",
		Description: "Flaky Flatbread Stuffed With Spiced Lamb And Lentils With A Drink Or Coffee or Tea.",
		Price: 5.00,
		Category: MenuCategory.BreakFast,
		IsSpecial: false,
		ImagePath: "assets/images/b1.jpeg",
		id: 0
	},
	{
		Name: "Parata (Egg + Dal) with (Drink/Coffee/Tea)",
		Description: "Flaky Flatbread Filled With Egg And Lentil Curry With A Drink Or Coffee or Tea.",
		Price: 4.00,
		Category: MenuCategory.BreakFast,
		IsSpecial: false,
		ImagePath: "assets/images/b1.jpeg",
		id: 0
	},
	{
		Name: "English Breakfast (Toast + Beans + Eggs + Sausage)",
		Description: "Classic Breakfast With Toast, Baked Beans, Eggs, And Sausage.",
		Price: 6.00,
		Category: MenuCategory.BreakFast,
		IsSpecial: false,
		ImagePath: "assets/images/b1.jpeg",
		id: 0
	},

	// Lunch Special
	{
		Name: "Fried Rice With Grilled Chicken And Salad",
		Description: "Fried Rice With Grilled Chicken And Fresh Salad.",
		Price: 4.00,
		Category: MenuCategory.LunchSpecial,
		IsSpecial: true,
		ImagePath: "assets/images/ls1.jpeg",
		id: 0
	},
	{
		Name: "Noodles With Chicken",
		Description: "Stir-Fried Noodles With Chicken And Vegetables.",
		Price: 3.50,
		Category: MenuCategory.LunchSpecial,
		IsSpecial: false,
		ImagePath: "assets/images/ls1.jpeg",
		id: 0
	},

	// Salad
	{
		Name: "Chicken & Avocado Salad",
		Description: "Grilled Chicken And Avocado With Mixed Greens.",
		Price: 3.00,
		Category: MenuCategory.Salad,
		IsSpecial: true,
		ImagePath: "assets/images/sal1.jpeg",
		id: 0
	},
	{
		Name: "Cashewnut Salad",
		Description: "Mixed Greens With Cashews And A Tangy Dressing.",
		Price: 3.00,
		Category: MenuCategory.Salad,
		IsSpecial: false,
		ImagePath: "assets/images/sal1.jpeg",
		id: 0
	},
	{
		Name: "Protein Salad",
		Description: "Mixed Greens With Grilled Chicken And Chickpeas.",
		Price: 3.00,
		Category: MenuCategory.Salad,
		IsSpecial: false,
		ImagePath: "assets/images/sal1.jpeg",
		id: 0
	},

	// Snacks
	{
		Name: 'Croissant',
		Description: 'Freshly baked, flaky croissant.',
		Price: 1.30,
		IsSpecial: true,
		Category: MenuCategory.Snacks,
		ImagePath: "assets/images/sn1.jpeg",
		id: 0
	},
  {
		Name: 'Pastry (Vegetable/Chicken/Cheese & Onion)',
		Description: 'Delicious pastry filled with Onino and mixed vegetables or chicken or cheese.',
		Price: 2.50,
		IsSpecial: false,
		Category: MenuCategory.Snacks,
		ImagePath: "assets/images/sn1.jpeg",
		id: 0
	},
  {
		Name: 'Shingara (1pc)',
		Description: 'Crispy, triangular pastry filled with spiced potatoes and peas.',
		Price: 1.00,
		IsSpecial: false,
		Category: MenuCategory.Snacks,
		ImagePath: "assets/images/sn1.jpeg",
		id: 0
	},
  {
		Name: 'Spring Roll (Vegetable each)',
		Description: 'Crispy spring roll filled with fresh vegetables.',
		Price: 1.00,
		IsSpecial: false,
		Category: MenuCategory.Snacks,
		ImagePath: "assets/images/sn1.jpeg",
		id: 0
	},
  {
		Name: 'Cake (Slice)',
		Description: 'A slice of moist, freshly baked cake.',
		Price: 1.00,
		IsSpecial: false,
		Category: MenuCategory.Snacks,
		ImagePath: "assets/images/sn1.jpeg",
		id: 0
	},
  {
		Name: 'Muffin',
		Description: 'Soft and fluffy muffin, perfect for a quick snack.',
		Price: 2.00,
		IsSpecial: false,
		Category: MenuCategory.Snacks,
		ImagePath: "assets/images/sn1.jpeg",
		id: 0
	},
  {
		Name: 'Milk Cake (Slice)',
		Description: 'Rich and creamy milk cake slice.',
		Price: 2.00,
		IsSpecial: false,
		Category: MenuCategory.Snacks,
		ImagePath: "assets/images/sn1.jpeg",
		id: 0
	},

	// Desserts
	{
		Name: 'RICE PUDDING (পায়েস)',
		Description: 'Creamy rice pudding flavored with cardamom and garnished with nuts.',
		Price: 1.50,
		IsSpecial: true,
		Category: MenuCategory.Desserts,
		ImagePath: "assets/images/d1.jpeg",
		id: 0
	},
	{
		Name: 'SWEET YOGURT',
		Description: 'Creamy yogurt sweetened with sugar and flavored with cardamom.',
		Price: 1.50,
		IsSpecial: false,
		Category: MenuCategory.Desserts,
		ImagePath: "assets/images/d1.jpeg",
		id: 0
	},
	{
		Name: 'MILKCAKE',
		Description: 'Rich and creamy milk cake.',
		Price: 2.00,
		IsSpecial: false,
		Category: MenuCategory.Desserts,
		ImagePath: "assets/images/d1.jpeg",
		id: 0
	},

	// Drinks
	{
		Name: 'SOFT DRINKS CAN (330ml)',
		Description: 'A refreshing soft drink in a convenient 330ml can.',
		Price: 1.00,
		IsSpecial: false,
		Category: MenuCategory.Drinks,
		ImagePath: 'assets/images/dr5.jpeg',
		id: 0
	},
  {
		Name: 'RUBICON CAN (330ml)',
		Description: 'A delicious Rubicon drink in a 330ml can, perfect for any time of the day.',
		Price: 1.00,
		IsSpecial: false,
		Category: MenuCategory.Drinks,
		ImagePath: 'assets/images/dr5.jpeg',
		id: 0
	},
  {
		Name: '7UP CAN',
		Description: 'A crisp and refreshing 7UP soft drink in a 330ml can.',
		Price: 1.00,
		IsSpecial: false,
		Category: MenuCategory.Drinks,
		ImagePath: 'assets/images/dr5.jpeg',
		id: 0
	},
  {
		Name: 'WATER (500ml)',
		Description: 'Pure and refreshing water in a 500ml bottle.',
		Price: 1.00,
		IsSpecial: false,
		Category: MenuCategory.Drinks,
		ImagePath: 'assets/images/dr5.jpeg',
		id: 0
	},
  {
		Name: 'RED BULL (330ml)',
		Description: 'An energizing Red Bull drink in a 330ml can.',
		Price: 1.80,
		IsSpecial: false,
		Category: MenuCategory.Drinks,
		ImagePath: 'assets/images/dr5.jpeg',
		id: 0
	},
  {
		Name: 'JUICE BOTTLE (500ml)',
		Description: 'Freshly made juice in a 500ml bottle.',
		Price: 1.99,
		IsSpecial: false,
		Category: MenuCategory.Drinks,
		ImagePath: 'assets/images/dr5.jpeg',
		id: 0
	},

	// Smoothie
	{
		Name: 'FRUITS AND YOGURT',
		Description: 'A delicious blend of fresh fruits and creamy yogurt.',
		Price: 3.00,
		IsSpecial: false,
		Category: MenuCategory.Smoothie,
		ImagePath: 'assets/images/sm1.jpeg',
		id: 0
	},
  {
		Name: 'MILKSHAKE (Mango, Banana, Strawberry)',
		Description: 'A creamy milkshake made with your choice of Mango, Banana, or Strawberry.',
		Price: 3.00,
		IsSpecial: false,
		Category: MenuCategory.Smoothie,
		ImagePath: 'assets/images/sm1.jpeg',
		id: 0
	},
  {
		Name: 'AVOCADO YOGURT',
		Description: 'A healthy and smooth blend of avocado and yogurt.',
		Price: 3.00,
		IsSpecial: false,
		Category: MenuCategory.Smoothie,
		ImagePath: 'assets/images/sm1.jpeg',
		id: 0
	},

	// Juice
	{
		Name: 'FRESH ORANGE JUICE',
		Description: 'A refreshing and tangy freshly squeezed orange juice.',
		Price: 2.50,
		IsSpecial: false,
		Category: MenuCategory.Juice,
		ImagePath: 'assets/images/j1.jpeg',
		id: 0
	},
  {
		Name: 'FRESH APPLE JUICE',
		Description: 'A crisp and naturally sweet fresh apple juice.',
		Price: 2.50,
		IsSpecial: false,
		Category: MenuCategory.Juice,
		ImagePath: 'assets/images/j1.jpeg',
		id: 0
	},
  {
		Name: 'FRESH PAPAYA JUICE',
		Description: 'A smooth and tropical papaya juice made from fresh papayas.',
		Price: 3.00,
		IsSpecial: false,
		Category: MenuCategory.Juice,
		ImagePath: 'assets/images/j1.jpeg',
		id: 0
	},
  {
		Name: 'CARROT JUICE',
		Description: 'A healthy and refreshing carrot juice with a natural sweetness.',
		Price: 2.50,
		IsSpecial: false,
		Category: MenuCategory.Juice,
		ImagePath: 'assets/images/j1.jpeg',
		id: 0
	},
  {
		Name: 'MANGO JUICE',
		Description: 'A rich and creamy mango juice made from fresh mangoes.',
		Price: 3.00,
		IsSpecial: false,
		Category: MenuCategory.Juice,
		ImagePath: 'assets/images/j1.jpeg',
		id: 0
	},
  {
		Name: 'MIX JUICE',
		Description: 'A delicious mix of various fresh fruits to make a refreshing juice.',
		Price: 3.00,
		IsSpecial: false,
		Category: MenuCategory.Juice,
		ImagePath: 'assets/images/j1.jpeg',
		id: 0
	},

	// Coffe
	{
		Name: 'ESPRESSO',
		Description: 'A rich and intense shot of freshly brewed espresso.',
		Price: 1.50,
		IsSpecial: false,
		Category: MenuCategory.Coffe,
		ImagePath: 'assets/images/c3.jpeg',
		id: 0
	},
  {
		Name: 'MACCHIATO',
		Description: 'A bold espresso topped with a touch of steamed milk.',
		Price: 1.50,
		IsSpecial: false,
		Category: MenuCategory.Coffe,
		ImagePath: 'assets/images/c3.jpeg',
		id: 0
	},
  {
		Name: 'CAPPUCCINO',
		Description: 'A classic coffee made with espresso, steamed milk, and foam.',
		Price: 2.50,
		IsSpecial: false,
		Category: MenuCategory.Coffe,
		ImagePath: 'assets/images/c3.jpeg',
		id: 0
	},
  {
		Name: 'LATTE',
		Description: 'A smooth and creamy coffee made with espresso and steamed milk.',
		Price: 2.50,
		IsSpecial: false,
		Category: MenuCategory.Coffe,
		ImagePath: 'assets/images/c3.jpeg',
		id: 0
	},
  {
		Name: 'AMERICANO',
		Description: 'A simple yet satisfying espresso diluted with hot water.',
		Price: 2.00,
		IsSpecial: false,
		Category: MenuCategory.Coffe,
		ImagePath: 'assets/images/c3.jpeg',
		id: 0
	},
  {
		Name: 'MOCHA',
		Description: 'A decadent blend of espresso, steamed milk, and chocolate.',
		Price: 3.00,
		IsSpecial: false,
		Category: MenuCategory.Coffe,
		ImagePath: 'assets/images/c3.jpeg',
		id: 0
	},
  {
		Name: 'HOT CHOCOLATE',
		Description: 'A warm and comforting drink made with rich chocolate.',
		Price: 3.00,
		IsSpecial: false,
		Category: MenuCategory.Coffe,
		ImagePath: 'assets/images/c3.jpeg',
		id: 0
	},

	// Tea
	{
		Name: 'KARAK TEA',
		Description: 'A spiced tea with a rich, bold flavor and a touch of sweetness.',
		Price: 1.50,
		IsSpecial: false,
		Category: MenuCategory.Tea,
		ImagePath: 'assets/images/t4.jpeg',
		id: 0
	},
  {
		Name: 'ENGLISH TEA',
		Description: 'A classic, traditional tea with a strong and smooth flavor.',
		Price: 1.50,
		IsSpecial: false,
		Category: MenuCategory.Tea,
		ImagePath: 'assets/images/t4.jpeg',
		id: 0
	},
  {
		Name: 'GREEN TEA',
		Description: 'A refreshing and healthy tea with a light, earthy flavor.',
		Price: 1.50,
		IsSpecial: false,
		Category: MenuCategory.Tea,
		ImagePath: 'assets/images/t4.jpeg',
		id: 0
	},
  {
		Name: 'HERBAL TEA (Mint, Lemon, Ginger)',
		Description: 'A soothing herbal blend with your choice of Mint, Lemon, or Ginger.',
		Price: 1.50,
		IsSpecial: false,
		Category: MenuCategory.Tea,
		ImagePath: 'assets/images/t4.jpeg',
		id: 0
	},
  {
		Name: 'MASALA TEA',
		Description: 'A fragrant and spiced tea with a rich blend of spices.',
		Price: 1.50,
		IsSpecial: false,
		Category: MenuCategory.Tea,
		ImagePath: 'assets/images/t4.jpeg',
		id: 0
	},

	// Sandwiches
	{
		Name: 'TOAST (Avocado, Egg)',
		Description: 'A toasted sandwich with creamy avocado and a perfectly cooked egg.',
		Price: 2.00,
		IsSpecial: false,
		Category: MenuCategory.Sandwiches,
		ImagePath: 'assets/images/sa2.jpeg',
		id: 0
	},
  {
		Name: 'CHICKEN SANDWICH',
		Description: 'A delicious chicken sandwich with fresh ingredients and a savory filling.',
		Price: 2.00,
		IsSpecial: false,
		Category: MenuCategory.Sandwiches,
		ImagePath: 'assets/images/sa2.jpeg',
		id: 0
	},
  {
		Name: 'CHICKEN SHAWARMA',
		Description: 'A flavorful chicken shawarma wrapped with spices and fresh veggies.',
		Price: 4.00,
		IsSpecial: true,
		Category: MenuCategory.Sandwiches,
		ImagePath: 'assets/images/sa2.jpeg',
		id: 0
	},
  {
		Name: 'CHICKEN WRAP',
		Description: 'A tasty chicken wrap with crispy chicken and fresh salad.',
		Price: 3.00,
		IsSpecial: false,
		Category: MenuCategory.Sandwiches,
		ImagePath: 'assets/images/sa2.jpeg',
		id: 0
	},
  {
		Name: 'PANINI (Chicken, Salad)',
		Description: 'A warm and toasted panini filled with chicken and crisp salad.',
		Price: 3.00,
		IsSpecial: false,
		Category: MenuCategory.Sandwiches,
		ImagePath: 'assets/images/sa2.jpeg',
		id: 0
	},
  {
		Name: 'CHEESY CHICKEN BURGER',
		Description: 'A juicy chicken burger with melted cheese and fresh toppings.',
		Price: 2.50,
		IsSpecial: false,
		Category: MenuCategory.Sandwiches,
		ImagePath: 'assets/images/sa2.jpeg',
		id: 0
	},

	// Bangladeshi Street Food
	{
		Name: 'CHOTPOTI (small)',
		Description: 'A small serving of spicy, tangy, and flavorful Chotpoti.',
		Price: 3.00,
		IsSpecial: true,
		Category: MenuCategory.BangladeshiStreetFood,
		ImagePath: 'assets/images/bsf1.jpeg',
		id: 0
	},
  {
		Name: 'CHOTPOTI (large)',
		Description: 'A large serving of spicy, tangy, and flavorful Chotpoti.',
		Price: 5.00,
		IsSpecial: false,
		Category: MenuCategory.BangladeshiStreetFood,
		ImagePath: 'assets/images/bsf1.jpeg',
		id: 0
	},
  {
		Name: 'FUSKA (6 piece)',
		Description: 'A delightful dish of 6 pieces of crispy, stuffed Fuska.',
		Price: 3.00,
		IsSpecial: true,
		Category: MenuCategory.BangladeshiStreetFood,
		ImagePath: 'assets/images/bsf2.jpeg',
		id: 0
	},
  {
		Name: 'FUSKA (10 piece)',
		Description: 'A large serving of 10 pieces of crispy, stuffed Fuska.',
		Price: 5.00,
		IsSpecial: false,
		Category: MenuCategory.BangladeshiStreetFood,
		ImagePath: 'assets/images/bsf1.jpeg',
		id: 0
	},
  {
		Name: 'PIAJU (3 PC)',
		Description: '3 pieces of crispy, savory Piajus, perfect for a quick snack.',
		Price: 1.00,
		IsSpecial: false,
		Category: MenuCategory.BangladeshiStreetFood,
		ImagePath: 'assets/images/bsf1.jpeg',
		id: 0
	},
  {
		Name: 'PITHA (1 PC)',
		Description: 'A single piece of traditional Pitha, a sweet Bengali snack.',
		Price: 1.00,
		IsSpecial: false,
		Category: MenuCategory.BangladeshiStreetFood,
		ImagePath: 'assets/images/bsf1.jpeg',
		id: 0
	},
];