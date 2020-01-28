import * as React from "react";
import { useContext } from 'react';

import Product from './Product';
import { ProductsContext } from '../../context/products-context';
import '../../styles/product.css';

const ProductList = props => {

   const { basket, setBasket } = props;
   
   const { products } = useContext(ProductsContext);

   return(
      <>
         <div className="product-list">
            {products.map( elm => 
               <Product 
                  key={elm.primary_isbn13}
                  productId={elm.primary_isbn13}
                  productName={elm.title} 
                  productAuthor={elm.author} 
                  image={elm.book_image}
                  productPrice={elm.weeks_on_list}
                  basket={basket}
                  setBasket={setBasket}
               />
            )}
         </div>
      </>
   );
}

export default ProductList;