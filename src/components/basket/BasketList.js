import * as React from 'react';
import { useState, useEffect } from 'react';

import BasketItem from './BasketItem';

const BasketList = props => {

   const { basket, setBasket, productId} = props;
   const [ totalCost, setTotalCost ] = useState();

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
               setBasket={setBasket}
               basket={basket}
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