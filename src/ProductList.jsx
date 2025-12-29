import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const products = [
  { id: 1, name: "Aloe Vera", price: 250 },
  { id: 2, name: "Snake Plant", price: 300 },
  { id: 3, name: "Money Plant", price: 200 }
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Our Plants</h2>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <button onClick={() => dispatch(addItem(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
