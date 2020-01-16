import * as React from 'react';
import BasketList from './BasketList';

import '../../styles/basket.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faShoppingCart);
library.add(faTimes);

const Basket = props => {

   const { toggleBasket, basket, setBasket, showBasket } = props;

   return(
      <>
         <div className="basket-list">
         <button className="basket-button" onClick={toggleBasket}>
            {showBasket ? <FontAwesomeIcon icon="times"/> : <FontAwesomeIcon icon="shopping-cart"/>}
         </button>
         {showBasket ? <BasketList basket={basket} setBasket={setBasket} /> : null}         
         </div>
      </>
   );
}

export default Basket;