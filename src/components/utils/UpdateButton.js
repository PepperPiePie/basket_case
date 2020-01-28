import * as React from "react";
import { useContext } from "react";
import { BasketContext } from '../../context/basket-context';
import "../../styles/navigation.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faRedoAlt);

const UpdateButton = props => {

   const { amount, productId, productName, productPrice } = props;
   const [ basket, setBasket ] = useContext(BasketContext);
   const findInBasket = productId => {
      return basket.find( elm => elm.productId === productId)
   }

   let found = findInBasket(productId);

   const updateBasket = amount => {
      setBasket(
      basket.map( elm => {
         if (elm.productId === productId) {
            let newAmount = amount
            return {...elm, amount: newAmount}
         } else {
            return elm
         }
      }))
   }

   const handleBasket = () => {
      found
      ? updateBasket(amount)
      : setBasket( [...basket, {productId, productName, productPrice, amount}]);;
   }

   return(
      <button className="button basket-button" onClick={handleBasket}>
         <FontAwesomeIcon icon="redo-alt"/>
      </button>
   );
}

export default UpdateButton;