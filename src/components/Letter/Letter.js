import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import letterCSS from "./Letter.module.css"

function Letter(props) {

  let params = useParams();
  let thisCard = useRef();

  console.log("Letter")
  useEffect(() => {
  
    // Set whether there will be a + or - button on the letter item
    if (props.buttonType === "add") {
      setButtonType("+");
    } else {
      setButtonType("-");
    }

    /**** Letter resizing stuff here  ****/

    // Get all imageArea, which is where the letter is displayed
    let imageArea = Array.from(document.querySelectorAll(`.${letterCSS.imageArea}`));

    // When page is resize, we get the width from the 1st imageArea
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

    
    // Get the elements whose colors change - inputs, letter, and background
    let colorInputs = thisCard.current.querySelector(`.${letterCSS.colorInputs}`);
    let background = thisCard.current.querySelector(`.${letterCSS.imageArea}`);

    // The colors can be pre-defined by user in props if we are in cart
    // Else, the will be random

    // For random, where colorInput is undefined
    if (props.colorInputOne === undefined || props.colorInputTwo === undefined) {
      if (props.colorInputOne === undefined) {
        let newColor = randomColor();
        colorInputs.lastChild.value = newColor;
        background.style.color = newColor;
        setLetterColor(newColor);
      }
      if (props.colorInputTwo === undefined) {
        console.log("here");
        let newColor = randomColor();
        background.style.backgroundColor = newColor;
        colorInputs.firstChild.value = newColor;
        setBackGroundColor(newColor);
      }
      // Else use props
    } else {
      colorInputs.firstChild.value = props.colorInputOne;
      colorInputs.lastChild.value = props.colorInputTwo;

      background.style.backgroundColor = props.colorInputOne;
      background.style.color = props.colorInputTwo;
      setBackGroundColor(props.colorInputOne);
      setLetterColor(props.colorInputTwo);
    }

  },[])

  // Get a random hex number
  let randomHex = function() {
    return (Math.floor(Math.random() * 256)).toString(16).padStart(2,'0');
  }
  // Create a random hex color code
  let randomColor = function() {
    return `#${randomHex()}${randomHex()}${randomHex()}`;
  }

  
  let onBackgroundColorChange = function(event) {
    let background = event.target.parentElement.parentElement.parentElement.firstChild;
    background.style.backgroundColor = event.target.value;

    // Must take the # off the beginning of the color because react router doesn't like it
    setBackGroundColor(backgroundColorRef.current.value.substring(1));
  }

  let onLetterColorChange = function(event) {
    let background = event.target.parentElement.parentElement.parentElement.firstChild;
    background.style.color = event.target.value;
    // Must take the # off the beginning of the color because react router doesn't like it
    setLetterColor(letterColorRef.current.value.substring(1));

  }

    // When someone hits the 'add to cart' button
    // Args: letter, quantity, colorOne, colorTwo
    let onButtonClick = function(event) {
      let colorInputs = event.target.parentElement.querySelector(`.${letterCSS.colorInputs}`);
      let colorInputOne = colorInputs.firstChild.value;
      let colorInputTwo = colorInputs.lastChild.value
     
      // params: letter, quantity, colorOne, colorTwo
      props.updateCart(props.let, 1, colorInputOne, colorInputTwo, props.buttonType, props.id);
    
    }

  const [backgroundColor, setBackGroundColor] = useState();
  const [letterColor, setLetterColor] = useState();
  const [buttonType, setButtonType] = useState();

  let backgroundColorRef = useRef('aaa');
  let letterColorRef = useRef('aaaaaa');



  return (
    
      <div className={letterCSS.letterCard} ref={thisCard}>
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
            <button onClick={onButtonClick}>{buttonType}</button>
          </div>
        </div>
      </div>
   
  )
}

export default Letter;