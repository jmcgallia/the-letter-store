import shopCSS from "./Shop.module.css";
import NavbarCSS from "../NavBar/NavBar.module.css";
import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar"
import Letter from "../Letter/Letter"
import LetterCSS from "../Letter/Letter.module.css";

function Shop(props) {

 

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

    let keyCounter = 1000;
    for (let letter of letters) {
      items.push(<Letter updateCart={props.updateCart} let={letter}
      colorOne={props.colorOne} colorTwo={props.colorTwo} buttonType="add"
      key={keyCounter}/>)
      keyCounter++;
    }

    return (
      <>
        {items}
      </>
    )
  }

  
  // Randomize colors of all letters + other things in the document for fun
  let onColorReset = function() {
    // All letters
    let allLetters = Array.from(document.querySelectorAll(`.${LetterCSS.letterCard}`));
    for (let letter of allLetters) {
      let background = letter.querySelector(`.${LetterCSS.imageArea}`);
      let letterTitle = background.nextElementSibling;
      letterTitle.style.backgroundColor = randomColor();
      background.style.backgroundColor = randomColor();
      background.style.color = randomColor();
    }
    // The shop
    let shop = document.querySelector(`.${shopCSS.shop}`);
    shop.style.backgroundColor = randomColor();
    shop.style.color = randomColor();

    // The nav
    let nav = document.querySelector(`.${NavbarCSS.sitenav}`)
    nav.style.backgroundColor = randomColor();
    nav.style.color = randomColor();
  }

    // Get a random hex number
    let randomHex = function() {
      return (Math.floor(Math.random() * 256)).toString(16).padStart(2,'0');
    }
    // Create a random hex color code
    let randomColor = function() {
      return `#${randomHex()}${randomHex()}${randomHex()}`;
    }

  return (
    
    <div className={shopCSS.shop}>
      <header>
        <h1>Browse</h1>
        <p>You won't be dissapointed.</p>
        <button className={shopCSS.randomButton} onClick={onColorReset}>Randomize Colors</button>
      </header>
      <div className={shopCSS.displayDiv}>
        {getItems()}
      </div>
    </div>
  )
}

export default Shop;