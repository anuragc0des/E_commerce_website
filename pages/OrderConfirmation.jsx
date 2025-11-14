import { useLocation } from "react-router-dom";

export default function OrderConfirmation() {
  const { state } = useLocation();

  if (!state) return <h2>No order found</h2>;

  return (
    <>
      <h1>Order Confirmed ✔</h1>
      <h3>Thank you, {state.form.name}</h3>

      <p>Shipping Address: {state.form.address}</p>
      <p>Phone: {state.form.phone}</p>

      <h2>Order Summary</h2>
      {state.cart.map((item) => (
        <p key={item.id}>
          {item.name} x {item.qty} = ₹{item.price * item.qty}
        </p>
      ))}

      <h2>Total Paid: ₹{state.total}</h2>
    </>
  );
}
