import * as React from "react";
import {Link} from "react-router-dom";

const NotFound = () => {

   return (
      <div>
         <h3>Oops something went wrong...</h3>
         <Link to={'/'}>Go back to the front page...</Link>
      </div>
   );
}

export default NotFound;
