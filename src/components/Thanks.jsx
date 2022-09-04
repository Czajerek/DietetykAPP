import React from "react";
import ReactDOM from "react-dom";



function Thanks(props) {
  return (
<div>
<h5>Dziękujemy. Skontaktujemy się z Państwem w ciągu 2 dni.</h5>
<button onClick={props.unChange}>Wróć</button>
</div>
);

}
export default Thanks;
