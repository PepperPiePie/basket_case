import * as React from "react";
import { useContext } from "react";
import { BasketContext } from '../../context/basket-context';

import "../../styles/navigation.css";
import "../../styles/utils.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
library.add(faShoppingCart);



const AddButton = props => {

   const { amount, productId, productName, productPrice, resetAmount } = props;
   const [ basket, setBasket ] = useContext(BasketContext);

   const findInBasket = productId => {
      return basket.find( elm => elm.productId === productId)
   }

   let found = findInBasket(productId);

   const updateBasket = amount => {
      setBasket(
      basket.map( elm => {
         if (elm.productId === productId) {
            let newAmount = elm.amount + amount
            return {...elm, amount: newAmount}
         } else {
            return elm
         }
      }))
   }

   const handleBasket = () => {
      found
      ? updateBasket(amount)
      : setBasket( [...basket, {productId, productName, productPrice, amount}]);
      resetAmount && resetAmount();
   }

   return(
      <button className="button add-button" onClick={handleBasket}>
         <FontAwesomeIcon icon="shopping-cart"/>
      </button>
   );
}

export default AddButton;