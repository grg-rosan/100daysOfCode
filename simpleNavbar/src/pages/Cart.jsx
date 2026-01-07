import PriButton from "../component/PriButton";
import { useCart } from "../context/CartContext";
import "../css/Cart.css";
// import "../css/PriButton.css"

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.images[0]} alt={item.title} />
          <div className="item-container">
            <h4>{item.title}</h4>
            <p>Price: ${item.price}</p>
          </div>
          <div className="clickable">
            <p>Qty: {item.qty}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <PriButton>PayOut</PriButton>
    </div>
  );
};

export default Cart;
