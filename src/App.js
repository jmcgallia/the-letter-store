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
  let [itemID, setItemID] = useState(0);

  let updateCart = function(letter, quantity, colorOne, colorTwo, operation, id) {
    if (operation === "add") {
      let newItem = {letter, quantity, colorOne, colorTwo, itemID};
      let newCart = [...cart, newItem];
      setItemID(itemID + 1);
      setCart(newCart);
    } else {
      let newCart = [...cart];
      console.log(newCart.findIndex(item => item.itemID === id));
      newCart.splice(newCart.findIndex(item => item.itemID === id),1);
      setCart(newCart);
    }

  } 

  useEffect(() => {
    console.log(cart);
  },[cart])

  

  return (
    <HashRouter basename="/">
        <NavBar/>
          
            <Routes>
              <Route path="/home" element={<Home updateCart={updateCart}/>}/>
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
