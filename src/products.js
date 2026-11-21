// Products for sale. image is a URL (served from public/images); price is in KRW.
const base = import.meta.env.BASE_URL;

const products = [
  { id: 'notebook', name: 'Grid Notebook', price: 3500, image: `${base}images/notebook.svg` },
  { id: 'earbuds', name: 'Wireless Earbuds', price: 89000, image: `${base}images/earbuds.svg` },
  { id: 'keyboard', name: 'Mechanical Keyboard', price: 120000, image: `${base}images/keyboard.svg` },
  { id: 'backpack', name: 'Laptop Backpack', price: 45000, image: `${base}images/backpack.svg` },
  { id: 'bottle', name: 'Water Bottle', price: 12000, image: `${base}images/bottle.svg` },
  { id: 'lamp', name: 'Desk Lamp', price: 28000, image: `${base}images/lamp.svg` },
];

export default products;
