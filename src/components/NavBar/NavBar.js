import NavBarCSS from "./NavBar.module.css";
import Home from "../Home/Home";
import Shop from "../Shop/Shop"
import {Link} from "react-router-dom"
import { useEffect, useState } from "react";
import menuImage from "./media/menu.png";


function NavBar(props) {

  const [active, setActive] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [windowSize, setWindowSize] = useState();
  

  useEffect(() => {
    onWindowResize();
    window.addEventListener('resize', onWindowResize);
  },[])

  // Updates the mobile state when window is resized or rendered for first time
  let onWindowResize = function() {
    //let sitenav = document.querySelector(`.${NavBarCSS.sitenav}`);
    setWindowSize(window.innerWidth);
    if (window.innerWidth <= 750) {
      setMobile(true);
    } else {
      setMobile(false);
    }

  }

  // Updates the active state when the toggle button for the menu is pressed
  let onMenuButtonClicked = function(event) {
    if (active === true) {
      setActive(false);
    } else {
      setActive(true);
    }


  }

  // When either the mobile or active states are changed, make the 
  // dropdown menu behave accordingly
  useEffect(() => {
    //console.log(mobile, active, windowSize);
    let linkList = document.querySelector(`.${NavBarCSS.sitenav} ul.${NavBarCSS.mobile}`);
    let sitenav = document.querySelector(`.${NavBarCSS.sitenav}`);
    
    if (mobile) {
      if (active) {
        // Menu down
        linkList.style.transform = `translateY(${sitenav.offsetHeight}px)`; 
      } else {
        // Menu up
        linkList.style.transform = `translateY(calc(-${sitenav.offsetHeight}px - 18vh) )`;
      }
    } else {
      linkList.style.transform = `translateY(calc(-${sitenav.offsetHeight}px - 18vh) )`;

    }

    // Make the nav toggle button rotate - state
    let navToggle = document.querySelector(`.${NavBarCSS.navToggle}`)
    if (active === false) {
      navToggle.classList.remove(`${NavBarCSS.shown}`);
    } else {
      navToggle.classList.add(`${NavBarCSS.shown}`);
    }

  },[active, mobile, windowSize])

  let onLinkClick = function() {
    setActive(false);
  }

  return (
    <>
    <nav className={NavBarCSS.sitenav}>
      <h1>The Letter Store</h1>
      <ul className={NavBarCSS.browser}>
        <li onClick={onLinkClick}><Link to="/home">Home</Link></li>
        <li onClick={onLinkClick}><Link to="/shop">Shop</Link></li>
        <li onClick={onLinkClick}><Link to="/cart">Cart</Link></li>
      </ul>
      <ul className={NavBarCSS.mobile}>
      <Link onClick={onLinkClick} to="/home"><li >Home</li></Link>
      <Link onClick={onLinkClick} to="/shop"><li>Shop</li></Link>
      <Link onClick={onLinkClick} to="/cart"><li >Cart</li></Link>
      </ul>
      <img src={menuImage} className={NavBarCSS.navToggle} onClick={onMenuButtonClicked}/>
    </nav>
    </>

  )
}

export default NavBar;