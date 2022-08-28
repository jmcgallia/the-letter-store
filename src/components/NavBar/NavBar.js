import NavBarCSS from "./NavBar.module.css";
import Home from "../Home/Home";
import Shop from "../Shop/Shop"
import {Link} from "react-router-dom"


function NavBar(props) {



  return (
    <nav className={NavBarCSS.sitenav}>
      <h1>The Letter Store</h1>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li>Cart</li>
      </ul>
    </nav>
  )
}

export default NavBar;