import React from "react";
import PropTypes from "prop-types";

Basket.propTypes = {};

function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const shipPrice = itemsPrice > 10000 ? 0 : 50;
  const totalPrice = itemsPrice + shipPrice;
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      {cartItems.length === 0 && <div>Cart is empty</div>}
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.name}</div>
          <div className="col-2">
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
          </div>

          <div className="col-2 text-right">
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className="row">
            <div className="col-2">Items Price </div>
            <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Shipping Price </div>
            <div className="col-1 text-right">${shipPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Total Price </div>
            <div className="col-1 text-right">${totalPrice.toFixed(2)}</div>
          </div>
          <hr />
          <div className="row">
            <button onClick={() => alert("Implement Checkout Successful")}>
              Checkout
            </button>
          </div>
        </>
      )}
    </aside>
  );
}

export default Basket;
