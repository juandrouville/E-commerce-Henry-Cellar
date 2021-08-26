import React from "react";
import { useSelector } from "react-redux";
import LayoutPrimary from "layouts/layout-primary";
import { useHistory } from "react-router-dom";

export default function DetailOrder() {
  // const dispatch = useDispatch();
  const order = useSelector(state => state.order);

  let history = useHistory();

  return (
    <LayoutPrimary>
      <div className="historyContainer">
        {order.length ? (
          order.map(i => {
            return (
              <div>
                {i.orderlines.map(order => {
                  return (
                    <div className="divclass">
                      <p className="porder">Product: {order.product.name} </p>
                      <p className="porder">
                        unit price: ${order.product.price} x {order.amount}
                      </p>
                      <p className="porder">
                        Subtotal: $ {order.product.price * order.amount}
                      </p>
                      <button
                        className="buttonClass"
                        onClick={() =>
                          history.push(`/product-detail/${order.product.id}`)
                        }
                      >
                        your opinion
                      </button>
                    </div>
                  );
                })}
              </div>
            );
          })
        ) : (
          <h2 className="empty_cart"> cargando... </h2>
        )}
      </div>
    </LayoutPrimary>
  );
}
