const CartItem = ({ name, price, delFromCart, quantity, id, orderlineId }) => {
  return (
    <div>
      {/* <div className="cartItem"> */}
      <h3>{name}</h3>
      <h4>
        ${price} x {quantity} = ${price * quantity}
      </h4>

      <div>
        <button className="buy_button" onClick={() => delFromCart(id,false,orderlineId)} >
          delete one
        </button>
        <button className="buy_button"
          onClick={() => delFromCart(id, true,orderlineId)}
          
        >
          delete all
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default CartItem;
