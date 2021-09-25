import logo from './logo.svg';
import './App.css';
import Home from './view/home/home';
import styled from 'styled-components';
import Product from './view/products/product';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './view/Login/Login';
import Cart from './view/cart/cart'
import Detail from './view/products/component/detail';
import Header from './view/header';
import { useState } from 'react';
import Cata from './view/cata/cata';
import checkout from './view/checkout/checkout';
import Checkout from './view/checkout/checkout';


import Admin from './view/admin/admin';



function App() {
  const [navbar, setNavbar] = useState(false);

  // const changedBackground = () => {
  //   console.log("123");
  //   console.log(window.scrollY);
  //   if (window.scrollY >= 50) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // }

  // window.addEventListener('scroll', changedBackground);

  return (
    
    <BoxContent>

      <Router>

        <Route exact path="/">
          
          <Home nav ={navbar}/>
        </Route>

        <Route exact path="/shop">
          <Product nav ={navbar}/>         
        </Route>

        <Route exact path="/shop/cata/:id">
            <Cata nav ={navbar}/>
        </Route>

        <Route exact path="/login">
          
          <Login/>

        </Route>

        <Route exact path="/cart">
          <Cart/>
        </Route>
        <Route  path="/shop/:id">
          <Detail/>
        </Route>   
        <Route exact path="/checkout">
          <Checkout/>
        </Route>
        <Route exact path="/admin">
          <Admin/>
        </Route>
      </Router>

        
       
      
      </BoxContent>
  );
}
const BoxContent = styled.div`
  
`

export default App;
