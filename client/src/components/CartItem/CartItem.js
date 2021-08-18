const CartItem = ({ name, price, delFromCart, quantity, id, orderlineId }) => {
  return (
    <div>
      {/* <div className="cartItem"> */}
      <h3>{name}</h3>
      <h4>
        ${price} x {quantity} = ${price * quantity}
      </h4>

      <div className="cartItem_buttons">
        <button onClick={() => delFromCart(id,false,orderlineId)} className="cartItem_button">
          delete one
        </button>
        <button
          onClick={() => delFromCart(id, true,orderlineId)}
          className="cartItem_button"
        >
          delete all
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default CartItem;
