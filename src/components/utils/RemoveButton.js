import * as React from "react";
import "../../styles/navigation.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

const RemoveButton = props => {

   const { basket, setBasket, productId } = props;

   const findInBasket = productId => {
      return basket.find( elm => elm.productId === productId)
   }

   let found = findInBasket(productId);

   const handleBasket = () => {
      setBasket(
      basket.filter( elm => {
            return elm !== found
      }))
   }

   return(
      <button className="button basket-button" onClick={handleBasket}>
         <FontAwesomeIcon icon="trash"/>
      </button>
   );
}

export default RemoveButton;