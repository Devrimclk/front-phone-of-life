import React from "react";
import Dropdown from "../component/Dropdown";
import Dropdown2 from "../component/Dropdown2";

interface ProductDetailsProps {
  id: number;
  title: string;
  price: number;
  description: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  id,
  title,
  price,
  description,
}) => {
  return (
    <div className="products-details">
      <span className="title">{title}</span>

      <span className="price">${price.toFixed(2)}</span>

      <p>{description}</p>
      <div className="button">
        <Dropdown />
        <Dropdown2 />
      </div>
      <div className="btn-wrapper">
        <button className={`${["btn"]} ${["outline"]}`}>Add to cart</button>

        <button className="btn">Buy now</button>
      </div>
    </div>
  );
};

export default ProductDetails;
