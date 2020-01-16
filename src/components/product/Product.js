import * as React from "react";
import '../../styles/product.css';

import ProductNav from './ProductNav';

const Product = props => {

   const { key, title, author, image, price, basket, setBasket } = props;

   return (
      <div key={key} className="product">
         <img className="product-img" alt={title} src={image}/>
         <p className="product-name">{title} <br/> by {author}</p>
         <p className="product-price">Price: {price} $</p>
         <ProductNav 
            basket={basket}
            setBasket={setBasket} 
            productName={title} 
            productPrice={price} />
      </div>
   )
}

export default Product;

