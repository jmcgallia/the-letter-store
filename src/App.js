import {Route, Routes, HashRouter} from "react-router-dom"
import { useEffect, useRef, useState } from "react";
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'
import Shop from './components/Shop/Shop'
import Footer from './components/Footer/Footer'
import LetterPage from "./components/LetterPage/LetterPage";
import Cart from "./components/Cart/Cart";



function App() {

  let [cart, setCart] = useState([]);

  let updateCart = function(letter, quantity, colorOne, colorTwo) {
    let newItem = {letter, quantity, colorOne, colorTwo};
    let newCart = [...cart, newItem];
    setCart(newCart);
  } 

  useEffect(() => {
    console.log(cart);
  },[cart])

  


  return (
    <HashRouter basename="/">
        <NavBar/>
          
            <Routes>
              <Route path="/home" element={<Home/>}/>
              <Route path="/shop" element={<Shop updateCart={updateCart}/>}/>
              <Route path="/cart"  element={<Cart updateCart={updateCart} cart={cart}/>}/>
              <Route path="/letter/:id"  element={<LetterPage updateCart={updateCart}/>}/>
              <Route path="*" element={<Home/>}/>
            </Routes>
          
        <Footer/>
        </HashRouter>
  );
}

export default App;
