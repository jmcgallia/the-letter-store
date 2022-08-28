import shopCSS from "./Shop.module.css";
import NavbarCSS from "../NavBar/NavBar.module.css";
import { useEffect } from "react";
import NavBar from "../NavBar/NavBar"

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
      shop.style.paddingTop = `${navBar.offsetHeight}px`;
    }
    
    window.addEventListener('resize', handleResize);

  },[])


  
  return (
    
    <div className={shopCSS.shop}>
      <header>
        <h1>Browse our letters!</h1>
      </header>
      <div>

      </div>
    </div>
  )
}

export default Shop;