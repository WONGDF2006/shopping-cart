import { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

// Owns the cart state and lifts it up for both children:
// ProductList adds items, Cart shows them and changes quantities.
function ShoppingCart({ products }) {
  // Only ids and quantities live in state; names and prices come from products.
  const [cart, setCart] = useState([]); // [{ id, quantity }]

  const addItem = (id) =>
    setCart((prev) =>
      prev.some((item) => item.id === id)
        ? prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
        : [...prev, { id, quantity: 1 }]
    );

  const decreaseItem = (id) =>
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0) // reaching 0 removes the line
    );

  const removeItem = (id) => setCart((prev) => prev.filter((item) => item.id !== id));
  const clearCart = () => setCart([]);

  // Derived from state on every render, never stored
  const items = cart.map((item) => ({ product: products.find((p) => p.id === item.id), quantity: item.quantity }));
  const total = items.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0);
  const quantityInCart = (id) => cart.find((item) => item.id === id)?.quantity ?? 0;

  return (
    <div className="shop">
      <ProductList products={products} quantityInCart={quantityInCart} onAdd={addItem} />
      <Cart
        items={items}
        total={total}
        onIncrease={addItem}
        onDecrease={decreaseItem}
        onRemove={removeItem}
        onClear={clearCart}
      />
    </div>
  );
}

export default ShoppingCart;
