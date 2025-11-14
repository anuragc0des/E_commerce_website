import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    payment: "COD"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.address || !form.phone) {
      alert("Please fill all fields");
      return;
    }

    const orderData = {
      cart,
      form,
      total: cart.reduce((t, p) => t + p.price * p.qty, 0)
    };

    clearCart();
    navigate("/order-confirmation", { state: orderData });
  };

  return (
    <>
      <h1>Checkout</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />

        <input
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <p>Payment Mode: Cash On Delivery</p>

        <button type="submit">Place Order</button>
      </form>
    </>
  );
}
