import { react, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LayoutPrimary from "layouts/layout-primary";
import { useHistory, Link, useParams } from "react-router-dom";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import PostReview from "../PostReview/PostReview";

export default function DetailOrder() {
  const dispatch = useDispatch();
  const orderOrderline = useSelector((state) => state.orderOrderline);

  let history = useHistory();
  const [state, setState] = useState(false);

  let abrirModal = () => {
    setState(!state);
  };
  const modalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <LayoutPrimary>
      <div className="historyPage">
        {orderOrderline.length ? (
          orderOrderline.map((o) => {
            return (
              <div className="line_order">
                <p>Product: {o.product.name} </p>
                <p>
                  unit price: ${o.product.price} x {o.amount}
                </p>
                <p>Subtotal: $ {o.product.price * o.amount}</p>

                {o.order.state === "received" ? (
                  <div>
                    <button className="buttonClass" onClick={() => history.push(`/postreview/${o.product.id}`)}>your opinion</button>
                    {/* <button onClick={() => abrirModal()}>Mostrar Modal</button> */}
                  </div>
                ) : null}
                {/* <Modal isOpen={state} style={modalStyles}>
                  <PostReview productId={o.product.id} />
                  <Button onClick={() => abrirModal()}>Cerrar</Button>
                </Modal> */}
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
