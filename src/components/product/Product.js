import * as React from "react";
import '../../styles/product.css';

import ProductNav from './ProductNav';

const Product = props => {

   const { productId, productName, productAuthor, image, productPrice} = props;

   return (
      <div className="product">
         <img className="product-img" alt={productName} src={image}/>
         <p className="product-name">{productName} <br/> by {productAuthor}</p>
         <p className="product-price">Price: {productPrice} $</p>
         <ProductNav 
            productId={productId}
            productName={productName} 
            productPrice={productPrice} />
      </div>
   )
}

export default Product;

