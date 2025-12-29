import { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <>
      {!started ? (
        <div className="landing">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <button onClick={() => setStarted(true)}>Get Started</button>
          </div>
        </div>
      ) : (
        <ProductList />
      )}
    </>
  );
}

export default App;
