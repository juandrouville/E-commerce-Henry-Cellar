const CartItem = ({ name, price, delFromCart, quantity, id, orderlineId }) => {
  return (
    <div>
      {/* <div className="cartItem"> */}
      <h3>{name}</h3>
      <h4>
        ${price} x {quantity} = ${price * quantity}
      </h4>

      <div>
        <button className="buy_button" onClick={() => delFromCart(id,false,orderlineId,name)} >
          {quantity>1 ? "Delete one" : "Delete"}
        </button>
        <pre> </pre>
        {quantity>1 ?<button className="buy_button"
          onClick={() => delFromCart(id, true,orderlineId,name)}>
          Delete all
        </button>:null}
      </div>
      {/* </div> */}
    </div>
  );
};

export default CartItem;
