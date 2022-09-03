import CartCSS from "./Cart.module.css";
import NavbarCSS from "../NavBar/NavBar.module.css";
import { useEffect, useState } from "react";
import Letter from "../Letter/Letter";


let Cart = function(props) {

  // We want the navbar to take space but stay on the top in the shop/cart pages
  // But take no space in the homepage
  useEffect(() => {


    // When the window resizes, we need to make sure the menu didn't go over
    // The header of the shop page, by adding as much top-padding as necessary
    let shop = document.querySelector(`.${CartCSS.cart}`);
    let navBar = document.querySelector(`.${NavbarCSS.sitenav}`);
    navBar.style.position = "fixed";
    navBar.style.minHeight = "7vh";
    navBar.style.top = "0px";

    let handleResize = () => {
      shop.style.paddingTop = `${navBar.offsetHeight+15}px`;
    }
    
    // Run handleResize() one time to make the padding work 
    // before there has been a resize on the first rendering
    handleResize();
    window.addEventListener('resize', handleResize);

  },[])

  let renderCart = function() {
    
    let cart = []
    for (let item of props.cart) {
      let newLetter = <Letter let={item.letter} 
      colorInputOne={item.colorOne} 
      colorInputTwo={item.colorTwo}
      updateCart={props.updateCart}
      buttonType="remove"
      id={item.itemID}/>
      cart.push(newLetter);
    }

    return cart;

  }

  return (

    <div className={CartCSS.cart}>
      <header>
        <h1>Cart</h1>
        <p>Click "Check Out" on the buttom to make your purchase!</p>
      </header>
      <div className={CartCSS.displayDiv}>
        {renderCart()}
      </div>
      <button className={CartCSS.button}>Not implemented</button>
    </div>    
  )
}

export default Cart;