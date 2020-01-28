import * as React from "react";
import Product from './Product';

import { useContext } from 'react';
import { ProductsContext } from '../../context/products-context';

import '../../styles/product.css';

const ProductList = () => {

   
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
               />
            )}
         </div>
      </>
   );
}

export default ProductList;