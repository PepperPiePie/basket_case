import React from 'react';
import { BasketProvider } from '../context/basket-context';

import '../styles/App.css';
import ProductList from '../components/product/ProductList';
import Basket from '../components/basket/Basket';

const MainPage = props => {

   const { toggleBasket, showBasket } = props;

   return(
      <>
         <BasketProvider>
            <ProductList />
            <Basket 
               toggleBasket={toggleBasket} 
               showBasket={showBasket}/>
         </BasketProvider>
      </>
   );
}

export default MainPage;