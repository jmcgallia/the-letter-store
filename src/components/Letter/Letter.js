import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import letterCSS from "./Letter.module.css"

function Letter(props) {

  let params = useParams();
  console.log(params.id)

  // This useEffect makes the sizes of all letters in their display boxes
  // Based on the size of that box
  // And also deals with changing the colors with the inputs
  useEffect(() => {



    // Get all imageArea, which is where the letter is displayed
    let imageArea = Array.from(document.querySelectorAll(`.${letterCSS.imageArea}`));

    // When page is resize, we get the width from the 1st imageArea
    // Since they are all the same size.
    // Then for each image area, we give the correct font-size
    let handleResize = function() {

      let imageAreaWidth = imageArea[0].offsetWidth;

      for (let element of imageArea) {
        element.style.fontSize = `${imageAreaWidth / 1.5}px`;
      }
    }
    
    // Run this one time on first render as well.
    handleResize();
    window.addEventListener('resize', handleResize);
  },[])

  return (
    
      <div className={letterCSS.letterCard}>
        <div className={letterCSS.letterContent}>
          <div className={letterCSS.imageArea}>
            {props.let}
          </div>
          <div className={letterCSS.titleArea}>
            <Link to={`../letter/${props.let}`}>
              <p>The letter {props.let}</p>
            </Link>
            <div className={letterCSS.colorInputs}>
              <input type="color"></input>
              <input type="color"></input>
            </div>
            <button>+</button>
          </div>
        </div>
      </div>
   
  )
}

export default Letter;