import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';
import ProductDetails from './components/ProductDetails/ProductDetails';
function App() {
  return (
    
    <div >
       <Header/>
      <Router>
         <Switch>
           <Route path="/shop">
              <Shop/>
            </Route>

            <Route path="/review">
              <Review></Review>
            </Route>
            
            <Route path="/inventory">
            <Inventory></Inventory>
            </Route>


           

            <Route exact path="/">
                <Shop/>
            </Route>

            <Route exact path="/product/:productKey">
                <ProductDetails></ProductDetails>
            </Route>

            <Route path="*">
               <Notfound></Notfound>
             </Route>
         </Switch>
      </Router>
      
    </div>
  );
}

export default App;
