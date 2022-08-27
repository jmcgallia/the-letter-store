import shopCSS from "./Shop.module.css";
import NavbarCSS from "..//NavBar/NavBar.module.css";
import { type } from "@testing-library/user-event/dist/type";

function Shop() {

  // We want the navbar static in the shop but fixed on the homepage
  let navBar = document.querySelector(`.${NavbarCSS.sitenav}`);
  navBar.style.position = "static";
  navBar.style.height = "7vh";
  

  return (
    <div className={shopCSS.shop}>
      <h1>The store.</h1>
    </div>
  )
}

export default Shop;