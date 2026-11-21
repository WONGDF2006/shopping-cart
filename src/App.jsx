import ShoppingCart from './components/ShoppingCart';
import products from './products';

function App() {
  return (
    <main className="app">
      <h1>Study Supplies Shop</h1>
      <p className="subtitle">React state homework · WongDengFoong</p>
      <ShoppingCart products={products} />
    </main>
  );
}

export default App;
