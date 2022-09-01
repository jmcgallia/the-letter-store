import {useParams} from "react-router-dom";
import { useEffect } from "react";
import LetterPageCSS from "./LetterPage.module.css";
import LetterCSS from "../Letter/Letter.module.css"
import NavbarCSS from "../NavBar/NavBar.module.css";
import Letter from "../Letter/Letter";

function LetterPage(props) {
  let {id} = useParams();
  let itemInfo = id.split("-");

  // Code to make the content go beneath the header
  useEffect(() => {

    let shop = document.querySelector(`.${LetterPageCSS.letterPage}`);
    let navBar = document.querySelector(`.${NavbarCSS.sitenav}`);
    navBar.style.position = "fixed";
    navBar.style.minHeight = "7vh";
    navBar.style.top = "0px";

    let handleResize = () => {
      shop.style.paddingTop = `${navBar.offsetHeight+15}px`;
    }
    
    handleResize();
    window.addEventListener('resize', handleResize);

  
    // Inject the right colors into the color inputs on this page
    let colorInputs = document.querySelector(`.${LetterCSS.colorInputs}`);
    colorInputs.firstChild.value = `#${itemInfo[1]}`;
    colorInputs.lastChild.value = `#${itemInfo[2]}`;
    
    // Inject those colors into the letter & background
    let letterArea = document.querySelector(`.${LetterCSS.imageArea}`);
    letterArea.style.backgroundColor = `#${itemInfo[1]}`;
    letterArea.style.color = `#${itemInfo[2]}`;

  },[])

  return (
    <div className={LetterPageCSS.letterPage}>
      <Letter let={itemInfo[0]} 
      colorOne={`#${itemInfo[1]}`} 
      colorTwo={`#${itemInfo[2]}`}
      updateCart={props.updateCart}/>
    </div>
  )
}

export default LetterPage;