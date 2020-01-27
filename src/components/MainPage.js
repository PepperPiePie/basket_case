import React from 'react';

import '../styles/App.css';
import ProductList from '../components/product/ProductList';
import Basket from '../components/basket/Basket';

const MainPage = props => {

   const { basket, setBasket, toggleBasket, showBasket } = props;

   return(
      <>
         <ProductList 
            setBasket={setBasket} 
            basket={basket} />
         <Basket 
            basket={basket} 
            setBasket={setBasket} 
            toggleBasket={toggleBasket} 
            showBasket={showBasket}/>
      </>
   );
}

export default MainPage;