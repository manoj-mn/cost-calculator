import { useEffect, useReducer } from "react";
import "./App.css";
import Products from "./components/Products";
import axios from "axios";
import CartReducer from "./reducers/CartReducer";
import Cart from "./components/Cart";

function App() {
  const [state, dispatch] = useReducer(CartReducer, {
    products: [],
    cart: [],
  });

  const getData = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    console.log("products", data.products);
    dispatch({ type: "LOAD_PRODUCTS", payload: data.products });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
