const Products = ({ state, dispatch }) => {
  console.log(state);
  const { products, cart } = state;
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          width: "80%",
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 10,
              border: "1px solid gray",
              width: "30%",
              gap: 10,
              marginTop: 10,
            }}
          >
            <img
              src={p.thumbnail}
              alt={p.title}
              style={{
                height: 200,
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{p.title}</span>
              <b>$ {p.price}</b>
            </div>

            {cart.some((p1) => p1.id === p.id) ? (
              <button
                style={{
                  background: "#d92d2d",
                  color: "white",
                  border: 0,
                  padding: 5,
                  borderRadius: 5,
                }}
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: p })
                }
              >
                Remove From Cart
              </button>
            ) : (
              <button
                style={{
                  background: "green",
                  color: "white",
                  border: 0,
                  padding: 5,
                  borderRadius: 5,
                }}
                onClick={() =>
                  dispatch({ type: "ADD_TO_CART", payload: { ...p, qty: 1 } })
                }
              >
                Add To Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
