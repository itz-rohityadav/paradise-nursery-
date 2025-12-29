import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h4>{item.name}</h4>
      <p>₹{item.price}</p>

      <button onClick={() =>
        dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
      }>
        -
      </button>

      <span>{item.quantity}</span>

      <button onClick={() =>
        dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
      }>
        +
      </button>

      <button onClick={() => dispatch(removeItem(item.id))}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
