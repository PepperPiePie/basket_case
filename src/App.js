import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';

import MainPage from './components/MainPage';
import NotFound from './components/utils/NotFound';

import './styles/App.css';

const App = () => {

  const API_KEY = "3If5G3vcIAo7p7kAkiFMZNCcEPC3yQ0n";

  const [ products, setProducts ] = useState([]);
  const [ fetching, setFetching ] = useState(true);
  const [ basket, setBasket ] = useState([]);
  const [ showBasket, setShowBasket ] = useState(false);
  
  const toggleBasket = () => {
      setShowBasket(!showBasket);
  }

  const fetchProducts = async () => {
    const result = await axios(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`);
    setProducts(result.data.results.books);
    setFetching(false);
  };

  const renderRoutes = () => {
    return (
      <Switch>
      <Route exact path={'/'}
        render={(props) =>
          <MainPage 
            {...props} 
            products={products} 
            basket={basket} 
            setBasket={setBasket} 
            toggleBasket={toggleBasket}
            showBasket={showBasket}/>}
      />
      <Route component={NotFound} />
    </Switch>
    )
}

  useEffect(() => {
    fetchProducts()
  }, [])

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
