import HomeCSS from "./Home.module.css";
import NavbarCSS from "../NavBar/NavBar.module.css";
import { useEffect } from "react";


function Home() {

  // We want the navbar static in the shop but fixed on the homepage
  useEffect(() => {
    let navBar = document.querySelector(`.${NavbarCSS.sitenav}`);
    navBar.style.position = "static";


  },[])

  return (
   
    <div className={HomeCSS.container}>
      <div className={HomeCSS.home}>
        <div className={`${HomeCSS.area} ${HomeCSS.areaOne}`}>
          <div className={`${HomeCSS.content}`}>
            <h1>Hello!</h1>
          </div>
        </div>
        <div className={`${HomeCSS.area} ${HomeCSS.areaTwo}`}>
          
        </div>
        <div className={`${HomeCSS.area} ${HomeCSS.areaThree}`}>
          
        </div>
        <div className={`${HomeCSS.area} ${HomeCSS.areaFour}`}>
          
        </div>

      </div>
    </div>
  )
}

export default Home;