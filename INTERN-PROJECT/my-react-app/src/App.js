import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import products from "./data/products";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;
