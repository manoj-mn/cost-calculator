import { useState, useEffect } from "react";

const Cart = ({ state, dispatch }) => {
  const { cart } = state;
  const [total, setTotal] = useState(0);
  const changeQty = (id, qty) => {
    dispatch({ type: "CHANGE_QTY", payload: { id, qty } });
  };

  useEffect(() => {
    console.log("mcart", cart);
    const ttl = cart.reduce((acc, curr) => {
      acc += curr.price * curr.qty;
      return acc;
    }, 0);
    setTotal(ttl);
  }, [cart]);

  return (
    <div
      style={{
        width: "20%",
        background: "lightgray",
        marginTop: 10,
      }}
    >
      <div style={{ textAlign: "center", paddingTop: 15 }}>
        <b style={{ fontSize: "x-large" }}>Cart</b>
        <p style={{ marginTop: 10 }}>
          <b>Total = $ {total}</b>
        </p>
      </div>
      {cart.length > 0 ? (
        cart.map((prod) => (
          <div
            style={{
              display: "flex",
              margin: 10,
              padding: 10,
              border: "1px solid gray",
            }}
            key={prod.id}
          >
            <img src={prod.thumbnail} alt={prod.title} style={{ width: 70 }} />
            <div style={{ marginLeft: 10, width: "65%" }}>
              <span style={{ fontSize: 14 }}>{prod.title}</span>
              <div style={{ fontWeight: "bold" }}>$ {prod.price}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <button onClick={() => changeQty(prod.id, prod.qty - 1)}>
                -
              </button>
              {prod.qty}
              <button onClick={() => changeQty(prod.id, prod.qty + 1)}>
                +
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>Cart is Empty</div>
      )}
    </div>
  );
};

export default Cart;
