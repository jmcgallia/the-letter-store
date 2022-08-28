import {useParams} from "react-router-dom";

function LetterPage() {
  let params = useParams();
  console.log(params.id)
  return (
    <>
      <h1>{params.id}</h1>
    </>
  )
}

export default LetterPage;