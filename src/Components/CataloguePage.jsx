import React from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import "./Style/CataloguePage.css";
import { BsFillCartCheckFill } from "react-icons/bs";


const CataloguePage = ({ products, onAddToCart }) => {
  

  return (
    <div>
      
      <h1 className="nav" >Products Page</h1>
      <div className="cart-icon-a">
        <Link to="/cart"><BsFillCartCheckFill/></Link>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <Product
            className="product"
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default CataloguePage;
