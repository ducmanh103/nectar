export type Product = {
  id: string;
  name: string;
  size: string;
  price: number;
  emoji: string;
  category: string;
};

export type GroceryCategory = {
  id: string;
  name: string;
  emoji: string;
  bg: string;
};

export type GroceryProduct = {
  id: string;
  name: string;
  size: string;
  price: number;
  emoji: string;
  category: string;
};

export const groceryCategories: GroceryCategory[] = [
  { id: "pulses", name: "Pulses", emoji: "🌾", bg: "#FFF5E4" },
  { id: "rice", name: "Rice", emoji: "🌾", bg: "#E8F5E9" },
  { id: "oil", name: "Oil", emoji: "🫙", bg: "#FFF9C4" },
  { id: "spices", name: "Spices", emoji: "🌶️", bg: "#FCE4EC" },
  { id: "dairy", name: "Dairy", emoji: "🥛", bg: "#E3F2FD" },
];

export const groceryProducts: GroceryProduct[] = [
  { id: "beef-bone", name: "Beef Bone", size: "1kg, Priceg", price: 4.99, emoji: "🥩", category: "meat" },
  { id: "broiler-chicken", name: "Broiler Chicken", size: "1kg, Priceg", price: 4.99, emoji: "🍗", category: "meat" },
];

export const products: Product[] = [
  {
    id: "apple",
    name: "Natural Red Apple",
    size: "1kg, Price",
    price: 4.99,
    emoji: "🍎",
    category: "fruits",
  },
  {
    id: "banana",
    name: "Organic Bananas",
    size: "7pcs, Price",
    price: 4.99,
    emoji: "🍌",
    category: "fruits",
  },
  {
    id: "pepper",
    name: "Bell Pepper Red",
    size: "1kg, Price",
    price: 4.99,
    emoji: "🫑",
    category: "vegetables",
  },
  {
    id: "ginger",
    name: "Ginger",
    size: "250gm, Price",
    price: 2.99,
    emoji: "🫚",
    category: "vegetables",
  },
];

// ── Explore category item ──────────────────────────────────────
export type CategoryItem = {
  id: string;
  name: string;
  size: string;
  price: number;
  emoji: string;
};

export const categoryProducts: Record<string, CategoryItem[]> = {
  "beverages": [
    { id: "diet-coke",        name: "Diet Coke",           size: "355ml, Price", price: 1.99,  emoji: "🥤" },
    { id: "sprite-can",       name: "Sprite Can",          size: "325ml, Price", price: 1.50,  emoji: "🧃" },
    { id: "apple-grape-juice",name: "Apple & Grape Juice", size: "2L, Price",    price: 15.99, emoji: "🍇" },
    { id: "orange-juice",     name: "Orange Juice",        size: "2L, Price",    price: 15.99, emoji: "🍊" },
    { id: "coca-cola-can",    name: "Coca Cola Can",       size: "325ml, Price", price: 4.99,  emoji: "🥤" },
    { id: "pepsi-can",        name: "Pepsi Can",           size: "330ml, Price", price: 4.99,  emoji: "🫙" },
  ],
  "fruits-veg": [
    { id: "apple",   name: "Natural Red Apple", size: "1kg, Price",  price: 4.99, emoji: "🍎" },
    { id: "banana",  name: "Organic Bananas",   size: "7pcs, Price", price: 4.99, emoji: "🍌" },
    { id: "pepper",  name: "Bell Pepper Red",   size: "1kg, Price",  price: 4.99, emoji: "🫑" },
    { id: "ginger",  name: "Ginger",            size: "250gm, Price",price: 2.99, emoji: "🫚" },
    { id: "broccoli",name: "Broccoli",          size: "500gm, Price",price: 3.49, emoji: "🥦" },
    { id: "carrot",  name: "Organic Carrots",   size: "1kg, Price",  price: 2.99, emoji: "🥕" },
  ],
  "meat-fish": [
    { id: "beef-bone",       name: "Beef Bone",       size: "1kg, Price",  price: 4.99, emoji: "🥩" },
    { id: "broiler-chicken", name: "Broiler Chicken", size: "1kg, Price",  price: 4.99, emoji: "🍗" },
    { id: "salmon",          name: "Salmon Fillet",   size: "500gm, Price",price: 9.99, emoji: "🐟" },
    { id: "shrimp",          name: "Tiger Shrimp",    size: "500gm, Price",price: 8.49, emoji: "🦐" },
  ],
  "bakery": [
    { id: "bread",    name: "Whole Wheat Bread", size: "400gm, Price", price: 2.49, emoji: "🍞" },
    { id: "croissant",name: "Butter Croissant",  size: "4pcs, Price",  price: 3.99, emoji: "🥐" },
    { id: "cookies",  name: "Choco Cookies",     size: "200gm, Price", price: 2.99, emoji: "🍪" },
    { id: "muffin",   name: "Blueberry Muffin",  size: "2pcs, Price",  price: 1.99, emoji: "🧁" },
  ],
  "dairy": [
    { id: "whole-milk",   name: "Whole Milk",     size: "1L, Price",  price: 1.99, emoji: "🥛" },
    { id: "eggs",         name: "Farm Eggs",      size: "12pcs, Price",price: 2.99, emoji: "🥚" },
    { id: "cheddar",      name: "Cheddar Cheese", size: "200gm, Price",price: 4.49, emoji: "🧀" },
    { id: "greek-yogurt", name: "Greek Yogurt",   size: "500gm, Price",price: 3.49, emoji: "🍶" },
  ],
  "cooking-oil": [
    { id: "olive-oil",   name: "Olive Oil",     size: "750ml, Price", price: 7.99, emoji: "🫙" },
    { id: "sunflower",   name: "Sunflower Oil", size: "1L, Price",    price: 3.99, emoji: "🌻" },
    { id: "butter",      name: "Butter",        size: "200gm, Price", price: 2.49, emoji: "🧈" },
    { id: "coconut-oil", name: "Coconut Oil",   size: "500ml, Price", price: 5.99, emoji: "🥥" },
  ],
};

