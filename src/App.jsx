import ProductList from './components/ProductList';
import products from './products';

function App() {
  return (
    <main className="app">
      <h1>Study Supplies Shop</h1>
      <ProductList products={products} quantityInCart={() => 0} onAdd={() => {}} />
    </main>
  );
}

export default App;
