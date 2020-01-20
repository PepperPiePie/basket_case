import * as React from "react";
import "../../styles/navigation.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart);

const AddButton = props => {

   const {  basket, setBasket, amount, productName, productPrice, resetAmount } = props;

   const findInBasket = name => {
      return basket.find( elm => elm.productName === name)
   }

   let found = findInBasket(productName);

   const updateBasket = amount => {
      setBasket(
      basket.map( elm => {
         if (elm.productName === productName) {
            let newAmount = elm.amount + amount
            return {...elm, amount: newAmount}
         } else {
            return elm
         }
      }))
   }

   const handleBasket = () => {
      console.log(found);
      found
      ? updateBasket(amount)
      : setBasket( [...basket, {productName, productPrice, amount}]);
      resetAmount && resetAmount();
   }

   return(
      <button className="add-button" onClick={handleBasket}>
         <FontAwesomeIcon icon="shopping-cart"/>
      </button>
   );
}

export default AddButton;