import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LayoutPrimary from "layouts/layout-primary";
import { useHistory } from "react-router-dom";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import PostReview from "../PostReview/PostReview";

export default function DetailOrder() {
  const dispatch = useDispatch();
  const orderOrderline = useSelector(state => state.orderOrderline);

  let history = useHistory();
  const [state, setState] = useState(false);

  let abrirModal = () => {
    setState(!state);
  };
  const modalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  };

  return (
    <LayoutPrimary>
      <div className="page_history_detail">
      <div className="container_history_detail">
        {orderOrderline.length ? (

          <div className="header">
            <div className="header_items">
              <h3>Product</h3>
              <h3>Unit Price</h3>
              <h3>Subtotal</h3>
              <h3>Action</h3>
            </div>
          {orderOrderline.map((o) => {

            return (
              <div className="line_items">
                <p className="text_item">{o.product.name} </p>
                <p className="text_item"> ${o.product.price} x {o.amount}</p>
                <p className="text_item"> $ {o.product.price * o.amount}</p>

                {o.order.state === "received" ? (
                  
                    <button onClick={() => abrirModal()}>Review!</button>
                  
                ) : (
                  <button disabled="true" onClick={() => abrirModal()}>Review!</button>
                )}
                <Modal isOpen={state} style={modalStyles}>
                  <PostReview productId={o.product.id} />
                  <Button onClick={() => abrirModal()}>Cerrar</Button>
                </Modal>
              </div>
            );
          })}
          </div>  
          
        ) : (
          <div className="empty_cart">
            <h2> cargando... </h2>
          </div>
        )}
        
        </div>
      </div>
    </LayoutPrimary>
  );
}
