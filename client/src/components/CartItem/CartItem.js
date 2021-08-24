import { useHistory } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

const CartItem = ({ name, price, delFromCart, quantity, id, orderlineId,image }) => {
  const history=useHistory()
  return (
    <div className="cartItem">
      
      <img src={image} alt="prod img" onClick={()=>history.push(`/product-detail/${id}`)}/>
      <div className="prod_name" onClick={()=>history.push(`/product-detail/${id}`)}>{name}</div>
      <div className="prod_price"> $ {price} </div>
      <div className="prod_quanty"> x {quantity}
        <div>
          <button className="button_menos" onClick={() => delFromCart(id,false,orderlineId,name)} > - </button>
        </div>
      </div>
      <div className="total_line">$ {price*quantity}</div>
      <div className="btn-option">
      <button 
          onClick={() => delFromCart(id, true,orderlineId,name)}>
            <AiOutlineDelete size={25}/>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
