import HomeCSS from "./Home.module.css";
import NavbarCSS from "../NavBar/NavBar.module.css";
import { useEffect } from "react";


function Home() {

  // We want the navbar static in the shop but fixed on the homepage
  useEffect(() => {
    let navBar = document.querySelector(`.${NavbarCSS.sitenav}`);
    navBar.style.position = "fixed";

    // From CSS-tricks. Set the height of our grid rows based on the
    // Height here so that the mobile search bar doesn't ruin height 
    let windowHeight = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${windowHeight}px`);
  },[])

  return (
   
    <div className={HomeCSS.home}>
      <div className={`${HomeCSS.page} ${HomeCSS.page1}`}>
        <div className={HomeCSS.content}>
          <h1>Send an unforgettable letter.</h1>
          <p>
            With the click of a button, you can send anyone in the world their favorite letter.
          </p>
          <div className={HomeCSS.preview}><div></div></div>
         
          <button>Make someone's day!</button>
          
          
        
        </div>
      </div>
      <div className={`${HomeCSS.page} ${HomeCSS.page2}`}>
        <h1>This is page 2</h1>
      </div>
      <div className={`${HomeCSS.page} ${HomeCSS.page3}`}>
        <h1>This is page 3</h1>
      </div>
      <div className={`${HomeCSS.page} ${HomeCSS.page4}`}>
        <h1>This is page 4</h1>
      </div>
    </div>
  
  )
}

export default Home;