import * as React from 'react';
import BasketItem from './BasketItem';

const BasketList = props => {

   const { basket, setBasket} = props;

   const renderBucketList = () => {
      return (
         <>
         {basket.map( elm => 
            <BasketItem 
               title={elm.productName} 
               amount={elm.amount}
               price={elm.productPrice}
               setBasket={setBasket}
            />
         )}
         {/* <p id="total-cost">Total cost: </p> */}
         </>
      )
   }

   console.log(basket, basket.length);

   return(
      <>
         {basket.length>0 ? renderBucketList() : <p id="empty">Your basket is empty</p>}
      </>
   );
}

export default BasketList;