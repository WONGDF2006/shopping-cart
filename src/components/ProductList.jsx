import formatPrice from '../formatPrice';

// Shows every product with an Add button. quantityInCart tells each card how many are already in the cart.
function ProductList({ products, quantityInCart, onAdd }) {
  return (
    <section className="products" aria-labelledby="products-heading">
      <h2 id="products-heading">Products</h2>
      <ul className="product-grid">
        {products.map((product) => {
          const inCart = quantityInCart(product.id);
          return (
            <li key={product.id} className="product-card">
              <img src={product.image} alt="" width="400" height="300" />
              <h3>{product.name}</h3>
              <p className="price">{formatPrice(product.price)}</p>
              <button type="button" className="add-button" onClick={() => onAdd(product.id)}>
                Add to cart<span className="visually-hidden">: {product.name}</span>
              </button>
              {/* Always rendered so every Add button lines up */}
              <p className="in-cart">{inCart > 0 ? `${inCart} in cart` : ' '}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ProductList;
