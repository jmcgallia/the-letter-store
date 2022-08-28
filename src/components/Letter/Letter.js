import { useParams, Link } from "react-router-dom";
import letterCSS from "./Letter.module.css"

function Letter(props) {

  let params = useParams();
  console.log(params.id)

  

  return (
    <Link to={`../letter/${props.let}`}>
      <div className={letterCSS.letterCard}>
        <h1>Letter Card {props.let}</h1>
      </div>
    </Link>
  )
}

export default Letter;