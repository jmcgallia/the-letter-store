import {useParams} from "react-router-dom";
import { useEffect } from "react";
import LetterPageCSS from "./LetterPage.module.css";
import NavbarCSS from "../NavBar/NavBar.module.css";
import Letter from "../Letter/Letter";

function LetterPage() {
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

  },[])

  return (
    <div className={LetterPageCSS.letterPage}>
      <Letter let={itemInfo[0]}/>
    </div>
  )
}

export default LetterPage;