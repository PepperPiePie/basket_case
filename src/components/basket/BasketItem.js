import * as React from "react";
import '../../styles/basket.css';

const BasketItem = props => {

   const { key, title, price, amount } = props;
   const cost = price*amount;

   return (
      <div key={key} className="basket-item">
         <p className="text"><span>{amount}x</span>{title}</p>
         <p className="text">Cost: {cost} $</p>   
      </div>
   )
}

export default BasketItem;