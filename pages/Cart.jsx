import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, updateQty, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((t, p) => t + p.price * p.qty, 0);

  return (
    <>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <input
              type="number"
              min="1"
              value={item.qty}
              onChange={(e) => updateQty(item.id, Number(e.target.value))}
            />

            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}

      <h2>Total: ₹{total}</h2>
      <Link to="/checkout">Proceed to Checkout</Link>
    </>
  );
}
