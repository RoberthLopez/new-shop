import React, { useContext } from "react";
import "../styles/ProductItem.scss";
import productIcon from "@icons/bt_add_to_cart.svg";
import productAddedIcon from "@icons/bt_added_to_cart.svg";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

const ProductItem = ({ product }) => {
  const { addToCart, isOnCart, removeFromCart } = useContext(AppContext);

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        {isOnCart(product) ? (
          <figure onClick={() => removeFromCart(product)}>
            <img src={productAddedIcon} alt="" />
          </figure>
        ) : (
          <figure onClick={() => addToCart(product)}>
            <img src={productIcon} alt="" />
          </figure>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
