import React from "react";
import "./Style/ConfirmOrderPage.css";
import {Link} from 'react-router-dom';

const ConfirmOrderPage = ({ products }) => {
  
  const total = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const handlePlaceOrder = () => {
   if(products.length === 0){
    alert("There are no products to place an order")
   }else{
    alert("You have successfully placed the order!")
    window.location.href = "/"
   }
  };

  return (
    <div>
      <h1 className="nav" >CONFIRM ORDER</h1>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - {product.quantity} x ${product.price.toFixed(2)}{" "}
              = ${(product.quantity * product.price).toFixed(2)}
            </li>
          ))}
        </ul>
        <p>Total: ${total.toFixed(2)}</p>
      </div>
      <button onClick={handlePlaceOrder} className="placeOrderButton">
        Place Order
      </button>
    </div>
  );
};

export default ConfirmOrderPage;
