import * as React from "react";

import Product from './Product';
import '../../styles/product.css';

const ProductList = props => {

   const { products, basket, setBasket } = props;

   return(
      <>
         <div className="product-list">
            {products.map( elm => 
               <Product 
                  key={elm.primary_isbn13}
                  title={elm.title} 
                  author={elm.author} 
                  image={elm.book_image}
                  price={elm.weeks_on_list}
                  basket={basket}
                  setBasket={setBasket}
               />
            )}
         </div>
      </>
   );
}

export default ProductList;