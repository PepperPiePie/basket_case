import React, { createContext, useState } from 'react';

const BasketContext = createContext();

const BasketProvider = props => {

   const [ basket, setBasket ] = useState([]);

   return (
      <BasketContext.Provider value={[ basket, setBasket ]}>
         {props.children}
      </BasketContext.Provider>
   )
}

export { BasketProvider, BasketContext }