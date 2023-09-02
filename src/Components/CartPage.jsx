import React from "react";
import { Link } from "react-router-dom";
import "./Style/CartPage.css";

const CartPage = ({ products, onRemoveFromCart }) => {
  return (
    <div>
      <h1 className="nav">CART PAGE</h1>
      <div className="cart-icon">
        <div><Link to="/">
          <button>Home Page</button>
        </Link></div>
       
       <div> <Link to="/confirm-order">
          <button>Checkout</button>
        </Link></div>
      </div>
      {products.length === 0 ? (
        <img
          className="cartIsEmpty"
          src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-4150967-3437888.png"
          alt="EmptyCartImage"
        />
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id}>
              <img className="image" src={product.image} alt="productImage" />
              <p>{product.name}</p>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <button onClick={() => onRemoveFromCart(product)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
