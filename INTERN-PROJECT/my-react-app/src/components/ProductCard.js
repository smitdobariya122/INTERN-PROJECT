function ProductCard({ name, price, category }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Category: {category}</p>
      <p>Price: ₹{price}</p>

      <span className={price > 100000 ? "luxury" : "normal"}>
        {price > 100000 ? "Luxury Watch" : "Budget Watch"}
      </span>
    </div>
  );
}

export default ProductCard;
