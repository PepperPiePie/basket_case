import React from 'react';
import { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainPage from './components/MainPage';
import NotFound from './components/utils/NotFound';
import { ProductsContext } from './context/products-context';

import './styles/App.css';

const App = () => {

  const [ showBasket, setShowBasket ] = useState(false);
  const { fetching } = useContext(ProductsContext);

  const toggleBasket = () => {
      setShowBasket(!showBasket);
  }

  const renderRoutes = () => {
    return (
      <Switch>
      <Route exact path={'/'}
        render={(props) =>
          <MainPage 
            {...props}  
            toggleBasket={toggleBasket}
            showBasket={showBasket}/>}
      />
      <Route component={NotFound} />
    </Switch>
    )
}

  return (
    <Router>
      <div className={showBasket ? "page open-basket" : "page close-basket"}>
        <div className="header">
          <h1> Which book would you like to hold in your basket?</h1>
        </div>
        <div className="content">
          {fetching ? <p>Loading...</p> : renderRoutes()}   
        </div>
      </div>
  </Router>
  );
}

export default App;
