import * as React from "react";
import { useState } from 'react';

import Counter from '../../components/utils/Counter';
import AddButton from '../../components/utils/AddButton';

import "../../styles/navigation.css";

const ProductNav = props => {

   const { productId, productName, productPrice } = props;
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
            amount={amount} 
            productId={productId}
            productName={productName} 
            productPrice={productPrice} 
            resetAmount={resetAmount}/>
      </div>
   );
}

export default ProductNav;