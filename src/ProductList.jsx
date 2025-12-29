import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../CartSlice";

const plants = [
  {
    category: "Indoor Plants",
    items: [
      { id: 1, name: "Aloe Vera", price: 250 },
      { id: 2, name: "Snake Plant", price: 300 },
      { id: 3, name: "Peace Lily", price: 350 }
    ]
  },
  {
    category: "Outdoor Plants",
    items: [
      { id: 4, name: "Rose", price: 200 },
      { id: 5, name: "Hibiscus", price: 280 },
      { id: 6, name: "Jasmine", price: 220 }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const isInCart = (id) => cart.some(item => item.id === id);

  return (
    <div>
      <h2>Our Plants</h2>

      {plants.map(group => (
        <div key={group.category}>
          <h3>{group.category}</h3>

          {group.items.map(plant => (
            <div key={plant.id}>
              <p>{plant.name} – ₹{plant.price}</p>

              <button
                disabled={isInCart(plant.id)}
                onClick={() => dispatch(addItem(plant))}
              >
                {isInCart(plant.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
