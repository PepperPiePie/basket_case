import * as React from "react";
import "../../styles/utils.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faPlusCircle);
library.add(faMinusCircle);

const Counter = props => {

   const { amount, updateAmount } = props;

   const add = () => {
      updateAmount(amount + 1);
   }
   const substract = () => {
      amount>1 ? updateAmount(amount-1) : updateAmount(1) 
   }
   return (
      <div className="counter">
         <FontAwesomeIcon icon="minus-circle" className="counter-button" onClick={substract} />
         <span className="counter-amount">{amount}</span>
         <FontAwesomeIcon icon="plus-circle" className="counter-button" onClick={add} />
      </div>
   );
}

export default Counter;