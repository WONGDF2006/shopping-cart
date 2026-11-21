import formatPrice from '../formatPrice';

// The cart sidebar. It owns no state: items come in as props, changes go out through callbacks.
function Cart({ items, total, onIncrease, onDecrease, onRemove, onClear }) {
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <aside className="cart" aria-labelledby="cart-heading">
      <h2 id="cart-heading">Your cart <span className="cart-count">({count} {count === 1 ? 'item' : 'items'})</span></h2>

      {items.length === 0 ? (
        <p className="empty">Your cart is empty. Add something from the list.</p>
      ) : (
        <ul className="cart-items">
          {items.map(({ product, quantity }) => (
            <li key={product.id} className="cart-item">
              <div className="cart-item-info">
                <span className="cart-item-name">{product.name}</span>
                <span className="cart-item-line">{formatPrice(product.price)} × {quantity} = {formatPrice(product.price * quantity)}</span>
              </div>
              <div className="quantity" role="group" aria-label={`Quantity of ${product.name}`}>
                <button type="button" onClick={() => onDecrease(product.id)} aria-label={`One fewer ${product.name}`}>−</button>
                <span aria-live="polite">{quantity}</span>
                <button type="button" onClick={() => onIncrease(product.id)} aria-label={`One more ${product.name}`}>+</button>
              </div>
              <button type="button" className="remove-button" onClick={() => onRemove(product.id)}>
                Remove<span className="visually-hidden"> {product.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className="total" aria-live="polite">Total: <strong>{formatPrice(total)}</strong></p>
      {items.length > 0 && (
        <button type="button" className="clear-button" onClick={onClear}>Clear cart</button>
      )}
    </aside>
  );
}

export default Cart;
