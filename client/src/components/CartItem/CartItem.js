

const CartItem = ({ name, price, delFromCart, quantity, id }) => {

    return (
        <div>
            <div>
                <h3>{name}</h3>
                <h4>${price} x {quantity} = ${price * quantity}</h4>
                <button onClick={() => delFromCart(id)}>delet one</button>
                <button onClick={() => delFromCart(id, true)}>delet all</button>
            </div>
        </div>
    );
};

export default CartItem