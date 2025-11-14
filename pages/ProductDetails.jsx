import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === Number(productId));

  if (!product) return <h2>Product not found.</h2>;

  return (
    <div className="product-hero">
      <div>
        <a href={product.image} target="_blank" rel="noopener noreferrer">
          <div className="img-wrap">
            <img
              src={product.image}
              alt={product.name}
              className="product-hero-img"
              loading="lazy"
            />
          </div>
        </a>
      </div>
      <aside>
        <h2>{product.name}</h2>
        <p className="text-muted">{product.description}</p>
        <h3>₹{product.price}</h3>

        <button className="btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </aside>
    </div>
  );
}
