import HomeCSS from "./Home.module.css";
import NavbarCSS from "../NavBar/NavBar.module.css";
import Letter from "../Letter/Letter";
import { useEffect } from "react";


function Home(props) {

  // We want the navbar static in the shop but fixed on the homepage
  useEffect(() => {
    let navBar = document.querySelector(`.${NavbarCSS.sitenav}`);
    navBar.style.position = "absolute";
    navBar.style.zIndex = "100";


  },[])

  console.log("Home");

  return (
   
    <div className={HomeCSS.home}>

      <div className={HomeCSS.intro}>
        <h1>Finish your tiling project with a message.</h1>
        <p>Our customizable lettered tiles will help you
          bring a new meaning to your project.
        </p>
        <button>BROWSE</button>
      </div>

      <div className={HomeCSS.letterSlider}>
            <div>
              <Letter updateCart={props.updateCart} let={"A"}
              colorOne={props.colorOne}
              colorTwo={props.colorTwo} 
              buttonType="add"/>
            </div>
            <div>
              <Letter updateCart={props.updateCart} let={"A"}
              colorOne={props.colorOne}
              colorTwo={props.colorTwo} 
              buttonType="add"/>
            </div>
            <div>
              <Letter updateCart={props.updateCart} let={"A"}
              colorOne={props.colorOne}
              colorTwo={props.colorTwo} 
              buttonType="add"/>
            </div>
            <div>
              <Letter updateCart={props.updateCart} let={"A"}
              colorOne={props.colorOne}
              colorTwo={props.colorTwo} 
              buttonType="add"/>
            </div>
            <div>
              <Letter updateCart={props.updateCart} let={"A"}
              colorOne={props.colorOne}
              colorTwo={props.colorTwo} 
              buttonType="add"/>
            </div>
            <div>
              <Letter updateCart={props.updateCart} let={"A"}
              colorOne={props.colorOne}
              colorTwo={props.colorTwo} 
              buttonType="add"/>
            </div>
            <div>
              <Letter updateCart={props.updateCart} let={"A"}
              colorOne={props.colorOne}
              colorTwo={props.colorTwo} 
              buttonType="add"/>
            </div>
            <div>
              <Letter updateCart={props.updateCart} let={"A"}
              colorOne={props.colorOne}
              colorTwo={props.colorTwo} 
              buttonType="add"/>
            </div>
      </div>

    </div>
    
    /*
      <div className={HomeCSS.home}>
        <div className={HomeCSS.introArea}>
          <div className={HomeCSS.introAreaContent}>
            <h1>Finish your building project with a real message.</h1>
            <p>Custom lettered tiles shipped straight to your door!</p>
            <button>BROWSE</button>
          </div>
        </div>
        <div className={HomeCSS.demo}>

          <div className={HomeCSS.randomLetter}>
            <div>
              <Letter updateCart={props.updateCart} let={"A"}
              colorOne={props.colorOne}
              colorTwo={props.colorTwo} 
              buttonType="add"/>
            </div>
            <div>
              <Letter updateCart={props.updateCart} let={"A"}
              colorOne={props.colorOne}
              colorTwo={props.colorTwo} 
              buttonType="add"/>
            </div>
            <div>
              <Letter updateCart={props.updateCart} let={"A"}
              colorOne={props.colorOne}
              colorTwo={props.colorTwo} 
              buttonType="add"/>
            </div>
            <div>
              <Letter updateCart={props.updateCart} let={"A"}
              colorOne={props.colorOne}
              colorTwo={props.colorTwo} 
              buttonType="add"/>
            </div>
          </div>
        </div>
       </div>
  */
  )
}

export default Home;