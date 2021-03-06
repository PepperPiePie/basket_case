import * as React from "react";
import { useState, useEffect } from 'react';

import Counter from '../utils/Counter';
import UpdateButton from '../utils/UpdateButton';
import RemoveButton from '../utils/RemoveButton';

import '../../styles/basket.css';

const BasketItem = props => {

   const { productId, productName, productPrice, amount } = props;
   const cost = productPrice*amount;
   const [ newAmount, setNewAmount] = useState();


   useEffect(() => {
      setNewAmount(amount)
   }, [amount]);

   return (
      <div className="basket-item">
         <div className="info">
            <p className="text"><span>{amount} x</span>{productName}</p>
            <p className="text">Cost: {cost}$</p>  
         </div>
         <div className="nav">
            <Counter amount={newAmount} updateAmount={setNewAmount} />
            <UpdateButton 
               amount={newAmount} 
               productId={productId}
               productName={productName}
               productPrice={productPrice}/>
            <RemoveButton 
               productId={productId}/>
         </div> 
      </div>
   );
}

export default BasketItem;