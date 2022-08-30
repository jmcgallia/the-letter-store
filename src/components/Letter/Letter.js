import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import letterCSS from "./Letter.module.css"

function Letter(props) {

  let params = useParams();
  console.log(params.id)

  // This useEffect makes the sizes of all letters in their display boxes
  // Based on the size of that box
  // And also deals with changing the colors with the inputs
  useEffect(() => {

    /**** Letter resizing stuff here  ****/

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



  let onBackgroundColorChange = function(event) {
    let background = event.target.parentElement.parentElement.parentElement.firstChild;
    background.style.backgroundColor = event.target.value;
    console.log("this happens")

    // Must take the # off the beginning of the color because react router doesn't like it
    setBackGroundColor(backgroundColorRef.current.value.substring(1));
  }

  let onLetterColorChange = function(event) {
    let background = event.target.parentElement.parentElement.parentElement.firstChild;
    background.style.color = event.target.value;
    // Must take the # off the beginning of the color because react router doesn't like it
    setLetterColor(letterColorRef.current.value.substring(1));

  }

  const [backgroundColor, setBackGroundColor] = useState();
  const [letterColor, setLetterColor] = useState();

  let backgroundColorRef = useRef('aaa');
  let letterColorRef = useRef('aaaaaa');



  return (
    
      <div className={letterCSS.letterCard}>
        <div className={letterCSS.letterContent}>
          <div className={letterCSS.imageArea}>
            {props.let}
          </div>
          <div className={letterCSS.titleArea}>
            <Link to={`../letter/${props.let}-${backgroundColor}-${letterColor}`}>
              <p>The letter {props.let}</p>
            </Link>
            <div className={letterCSS.colorInputs}>
              <input type="color" onChange={onBackgroundColorChange} ref={backgroundColorRef}></input>
              <input type="color" onChange={onLetterColorChange} ref={letterColorRef}></input>
            </div>
            <button>+</button>
          </div>
        </div>
      </div>
   
  )
}

export default Letter;