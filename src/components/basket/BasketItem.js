import * as React from "react";
import { useState, useEffect } from 'react';

import Counter from '../utils/Counter';
import '../../styles/basket.css';

const BasketItem = props => {

   const { key, productName, productPrice, amount } = props;
   const cost = productPrice*amount;
   const [ newAmount, setNewAmount] = useState();

   useEffect(() => {
      setNewAmount(amount)
   }, [amount]);

   return (
      <div key={key} className="basket-item">
         <p className="text">{productName}</p>
         <div className="nav">
            <Counter amount={newAmount} updateAmount={setNewAmount} />
            <button className="button">Update</button>
            <button className="button">Remove product</button>
         </div>
         <p className="text">Cost: {cost} $</p>   
      </div>
   );
}

export default BasketItem;