import shopCSS from "./Shop.module.css";
import NavbarCSS from "../NavBar/NavBar.module.css";
import { useEffect } from "react";
import NavBar from "../NavBar/NavBar"
import Letter from "../Letter/Letter"

function Shop() {

  // We want the navbar to take space but stay on the top in the shop page
  // But take no space in the homepage
  useEffect(() => {


    // When the window resizes, we need to make sure the menu didn't go over
    // The header of the shop page, by adding as much top-padding as necessary
    let shop = document.querySelector(`.${shopCSS.shop}`);
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

  let getItems = function() {

    let letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let items = [];

    for (let letter of letters) {
      items.push(<Letter let={letter}/>)
    }

    return (
      <>
        {items}
      </>
    )
  }

  
  return (
    
    <div className={shopCSS.shop}>
      <header>
        <h1>Browse our letters!</h1>
        <p>We know you'll love them.</p>
      </header>
      <div className={shopCSS.displayDiv}>
        {getItems()}
      </div>
    </div>
  )
}

export default Shop;