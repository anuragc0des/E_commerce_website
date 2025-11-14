import { useState, useMemo } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function ProductListing() {
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = category ? p.category === category : true;
      const matchesQuery = query
        ? p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
        : true;
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div>
      <div
        className="list-header"
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          marginBottom: 18,
        }}
      >
        <h2 style={{ margin: 0 }}>All Products</h2>

        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            gap: 8,
            alignItems: "center",
          }}
        >
          <input
            className="search"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              padding: 8,
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.06)",
              background: "transparent",
              color: "inherit",
            }}
          />

          <select
            className="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              padding: 8,
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.06)",
              background: "transparent",
              color: "inherit",
            }}
          >
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Mobiles">Mobiles</option>
            <option value="Fashion">Fashion</option>
          </select>
        </div>
      </div>

      <div className="grid">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
