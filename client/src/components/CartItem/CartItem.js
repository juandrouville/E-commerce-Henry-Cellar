const CartItem = ({ name, price, delFromCart, quantity }) => {

    return (
        <div>
            <h3>{name}</h3>
            <h4>${price} x {quantity} = ${price * quantity}</h4>
            <button>delet one</button>
            <button>delet all</button>
        </div>
    );
};

export default CartItem