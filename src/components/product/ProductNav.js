import * as React from "react";
import { useState } from 'react';
import "../../styles/navigation.css";

import Counter from '../../components/utils/Counter';
import AddButton from '../../components/utils/AddButton';

const ProductNav = props => {

   const { basket, setBasket, productId, productName, productPrice } = props;
   const [ amount, setAmount] = useState(1);

   const resetAmount = () => {
      setAmount(1);
   }

   return(
      <div className="product-nav">
         <Counter 
            amount={amount} 
            updateAmount={setAmount} />
         <AddButton 
            basket={basket}
            setBasket={setBasket} 
            amount={amount} 
            productId={productId}
            productName={productName} 
            productPrice={productPrice} 
            resetAmount={resetAmount}/>
      </div>
   );
}

export default ProductNav;