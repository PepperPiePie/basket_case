import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { BasketContext } from '../../context/basket-context';

import BasketItem from './BasketItem';

const BasketList = () => {

   const [ totalCost, setTotalCost ] = useState();
   const [ basket ] = useContext(BasketContext);

   useEffect( () => {
      let newTotalCost = 0;
      basket.forEach( elm => {
         newTotalCost += elm.amount*elm.productPrice;
      });
      setTotalCost(newTotalCost)
   }, [basket]);

   const renderBasketList = () => {
      return (
         <>
         {basket.map( elm => 
            <BasketItem 
               key={elm.productId}
               productId={elm.productId}
               productName={elm.productName} 
               amount={elm.amount}
               productPrice={elm.productPrice}
            />
         )}
         <p id="total-cost">Total cost: {totalCost}$</p>
         </>
      )
   }

   return(
      <>
         {basket.length>0 ? renderBasketList() : <p id="empty">Your basket is empty</p>}
      </>
   );
}

export default BasketList;