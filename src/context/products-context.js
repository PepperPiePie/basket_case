import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductsContext = createContext();
const API_KEY = "3If5G3vcIAo7p7kAkiFMZNCcEPC3yQ0n";

const ProductsProvider = props => {

   let url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`

   const [ products, setProducts ] = useState([]);
   const [ fetching, setFetching ] = useState(true);

   const fetchProducts = async () => {
      console.log("fetching");
      const result = await axios(url);
      setProducts(result.data.results.books);
      setFetching(false);
   };

   useEffect(() => {
      fetchProducts()
   }, [])

   return (
      <ProductsContext.Provider value={{
         fetching,
         products
      }}>
         {props.children}
      </ProductsContext.Provider>
   )
}

export { ProductsProvider, ProductsContext }