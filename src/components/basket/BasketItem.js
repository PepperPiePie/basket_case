import * as React from "react";
import { useState, useEffect } from 'react';

import Counter from '../utils/Counter';
import UpdateButton from '../utils/UpdateButton';
import RemoveButton from '../utils/RemoveButton';
import '../../styles/basket.css';

const BasketItem = props => {

   const { basket, setBasket, productId, productName, productPrice, amount } = props;
   const cost = productPrice*amount;
   const [ newAmount, setNewAmount] = useState();

   useEffect(() => {
      setNewAmount(amount)
   }, [amount]);

   return (
      <div className="basket-item">
         <div className="info">
            <p className="text">{productName}</p>
            <p className="text">Cost: {cost}$</p>  
         </div>
         <div className="nav">
            <Counter amount={newAmount} updateAmount={setNewAmount} />
            <UpdateButton 
               basket={basket}
               setBasket={setBasket}
               amount={newAmount} 
               productId={productId}
               productName={productName}
               productPrice={productPrice}/>
            <RemoveButton 
               basket={basket}
               setBasket={setBasket}
               productId={productId}/>
         </div> 
      </div>
   );
}

export default BasketItem;